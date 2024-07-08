import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BuyerService } from "./buyer.service";
import { BuyerControllerBase } from "./base/buyer.controller.base";

@swagger.ApiTags("buyers")
@common.Controller("buyers")
export class BuyerController extends BuyerControllerBase {
  constructor(protected readonly service: BuyerService) {
    super(service);
  }
}
