import * as graphql from "@nestjs/graphql";
import { BuyerResolverBase } from "./base/buyer.resolver.base";
import { Buyer } from "./base/Buyer";
import { BuyerService } from "./buyer.service";

@graphql.Resolver(() => Buyer)
export class BuyerResolver extends BuyerResolverBase {
  constructor(protected readonly service: BuyerService) {
    super(service);
  }
}
