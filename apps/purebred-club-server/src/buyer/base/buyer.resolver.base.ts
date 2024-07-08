/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Buyer } from "./Buyer";
import { BuyerCountArgs } from "./BuyerCountArgs";
import { BuyerFindManyArgs } from "./BuyerFindManyArgs";
import { BuyerFindUniqueArgs } from "./BuyerFindUniqueArgs";
import { CreateBuyerArgs } from "./CreateBuyerArgs";
import { UpdateBuyerArgs } from "./UpdateBuyerArgs";
import { DeleteBuyerArgs } from "./DeleteBuyerArgs";
import { MessageFindManyArgs } from "../../message/base/MessageFindManyArgs";
import { Message } from "../../message/base/Message";
import { User } from "../../user/base/User";
import { BuyerService } from "../buyer.service";
@graphql.Resolver(() => Buyer)
export class BuyerResolverBase {
  constructor(protected readonly service: BuyerService) {}

  async _buyersMeta(
    @graphql.Args() args: BuyerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Buyer])
  async buyers(@graphql.Args() args: BuyerFindManyArgs): Promise<Buyer[]> {
    return this.service.buyers(args);
  }

  @graphql.Query(() => Buyer, { nullable: true })
  async buyer(
    @graphql.Args() args: BuyerFindUniqueArgs
  ): Promise<Buyer | null> {
    const result = await this.service.buyer(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Buyer)
  async createBuyer(@graphql.Args() args: CreateBuyerArgs): Promise<Buyer> {
    return await this.service.createBuyer({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Buyer)
  async updateBuyer(
    @graphql.Args() args: UpdateBuyerArgs
  ): Promise<Buyer | null> {
    try {
      return await this.service.updateBuyer({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Buyer)
  async deleteBuyer(
    @graphql.Args() args: DeleteBuyerArgs
  ): Promise<Buyer | null> {
    try {
      return await this.service.deleteBuyer(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Message], { name: "messages" })
  async findMessages(
    @graphql.Parent() parent: Buyer,
    @graphql.Args() args: MessageFindManyArgs
  ): Promise<Message[]> {
    const results = await this.service.findMessages(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Buyer): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}