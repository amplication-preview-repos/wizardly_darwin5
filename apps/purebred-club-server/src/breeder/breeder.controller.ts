import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BreederService } from "./breeder.service";
import { BreederControllerBase } from "./base/breeder.controller.base";

@swagger.ApiTags("breeders")
@common.Controller("breeders")
export class BreederController extends BreederControllerBase {
  constructor(protected readonly service: BreederService) {
    super(service);
  }
}
