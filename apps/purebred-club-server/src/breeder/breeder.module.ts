import { Module } from "@nestjs/common";
import { BreederModuleBase } from "./base/breeder.module.base";
import { BreederService } from "./breeder.service";
import { BreederController } from "./breeder.controller";
import { BreederResolver } from "./breeder.resolver";

@Module({
  imports: [BreederModuleBase],
  controllers: [BreederController],
  providers: [BreederService, BreederResolver],
  exports: [BreederService],
})
export class BreederModule {}
