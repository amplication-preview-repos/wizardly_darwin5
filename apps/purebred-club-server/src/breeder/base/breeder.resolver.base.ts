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
import { Breeder } from "./Breeder";
import { BreederCountArgs } from "./BreederCountArgs";
import { BreederFindManyArgs } from "./BreederFindManyArgs";
import { BreederFindUniqueArgs } from "./BreederFindUniqueArgs";
import { CreateBreederArgs } from "./CreateBreederArgs";
import { UpdateBreederArgs } from "./UpdateBreederArgs";
import { DeleteBreederArgs } from "./DeleteBreederArgs";
import { MessageFindManyArgs } from "../../message/base/MessageFindManyArgs";
import { Message } from "../../message/base/Message";
import { User } from "../../user/base/User";
import { BreederService } from "../breeder.service";
@graphql.Resolver(() => Breeder)
export class BreederResolverBase {
  constructor(protected readonly service: BreederService) {}

  async _breedersMeta(
    @graphql.Args() args: BreederCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Breeder])
  async breeders(
    @graphql.Args() args: BreederFindManyArgs
  ): Promise<Breeder[]> {
    return this.service.breeders(args);
  }

  @graphql.Query(() => Breeder, { nullable: true })
  async breeder(
    @graphql.Args() args: BreederFindUniqueArgs
  ): Promise<Breeder | null> {
    const result = await this.service.breeder(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Breeder)
  async createBreeder(
    @graphql.Args() args: CreateBreederArgs
  ): Promise<Breeder> {
    return await this.service.createBreeder({
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

  @graphql.Mutation(() => Breeder)
  async updateBreeder(
    @graphql.Args() args: UpdateBreederArgs
  ): Promise<Breeder | null> {
    try {
      return await this.service.updateBreeder({
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

  @graphql.Mutation(() => Breeder)
  async deleteBreeder(
    @graphql.Args() args: DeleteBreederArgs
  ): Promise<Breeder | null> {
    try {
      return await this.service.deleteBreeder(args);
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
    @graphql.Parent() parent: Breeder,
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
  async getUser(@graphql.Parent() parent: Breeder): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
