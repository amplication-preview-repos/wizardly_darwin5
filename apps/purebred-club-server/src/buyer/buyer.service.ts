import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BuyerServiceBase } from "./base/buyer.service.base";

@Injectable()
export class BuyerService extends BuyerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
