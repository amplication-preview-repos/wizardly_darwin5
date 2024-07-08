import { Module } from "@nestjs/common";
import { BuyerModuleBase } from "./base/buyer.module.base";
import { BuyerService } from "./buyer.service";
import { BuyerController } from "./buyer.controller";
import { BuyerResolver } from "./buyer.resolver";

@Module({
  imports: [BuyerModuleBase],
  controllers: [BuyerController],
  providers: [BuyerService, BuyerResolver],
  exports: [BuyerService],
})
export class BuyerModule {}
