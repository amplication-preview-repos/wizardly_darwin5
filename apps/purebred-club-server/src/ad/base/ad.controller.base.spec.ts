import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { AdController } from "../ad.controller";
import { AdService } from "../ad.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "exampleName",
  breed: "exampleBreed",
  color: "exampleColor",
  weight: 42.42,
  tests: "exampleTests",
  publicationStartDate: new Date(),
  publicationEndDate: new Date(),
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "exampleName",
  breed: "exampleBreed",
  color: "exampleColor",
  weight: 42.42,
  tests: "exampleTests",
  publicationStartDate: new Date(),
  publicationEndDate: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "exampleName",
    breed: "exampleBreed",
    color: "exampleColor",
    weight: 42.42,
    tests: "exampleTests",
    publicationStartDate: new Date(),
    publicationEndDate: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "exampleName",
  breed: "exampleBreed",
  color: "exampleColor",
  weight: 42.42,
  tests: "exampleTests",
  publicationStartDate: new Date(),
  publicationEndDate: new Date(),
};

const service = {
  createAd() {
    return CREATE_RESULT;
  },
  ads: () => FIND_MANY_RESULT,
  ad: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Ad", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AdService,
          useValue: service,
        },
      ],
      controllers: [AdController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /ads", async () => {
    await request(app.getHttpServer())
      .post("/ads")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        publicationStartDate: CREATE_RESULT.publicationStartDate.toISOString(),
        publicationEndDate: CREATE_RESULT.publicationEndDate.toISOString(),
      });
  });

  test("GET /ads", async () => {
    await request(app.getHttpServer())
      .get("/ads")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          publicationStartDate:
            FIND_MANY_RESULT[0].publicationStartDate.toISOString(),
          publicationEndDate:
            FIND_MANY_RESULT[0].publicationEndDate.toISOString(),
        },
      ]);
  });

  test("GET /ads/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/ads"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /ads/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/ads"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        publicationStartDate:
          FIND_ONE_RESULT.publicationStartDate.toISOString(),
        publicationEndDate: FIND_ONE_RESULT.publicationEndDate.toISOString(),
      });
  });

  test("POST /ads existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/ads")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        publicationStartDate: CREATE_RESULT.publicationStartDate.toISOString(),
        publicationEndDate: CREATE_RESULT.publicationEndDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/ads")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
