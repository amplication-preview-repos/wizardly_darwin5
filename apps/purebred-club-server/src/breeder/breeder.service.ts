import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BreederServiceBase } from "./base/breeder.service.base";

@Injectable()
export class BreederService extends BreederServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
