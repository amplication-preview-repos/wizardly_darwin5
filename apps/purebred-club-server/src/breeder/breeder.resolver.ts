import * as graphql from "@nestjs/graphql";
import { BreederResolverBase } from "./base/breeder.resolver.base";
import { Breeder } from "./base/Breeder";
import { BreederService } from "./breeder.service";

@graphql.Resolver(() => Breeder)
export class BreederResolver extends BreederResolverBase {
  constructor(protected readonly service: BreederService) {
    super(service);
  }
}
