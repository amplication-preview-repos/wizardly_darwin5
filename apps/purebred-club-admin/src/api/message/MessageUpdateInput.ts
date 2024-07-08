import { AdWhereUniqueInput } from "../ad/AdWhereUniqueInput";
import { BreederWhereUniqueInput } from "../breeder/BreederWhereUniqueInput";
import { BuyerWhereUniqueInput } from "../buyer/BuyerWhereUniqueInput";

export type MessageUpdateInput = {
  content?: string | null;
  sentAt?: Date | null;
  ad?: AdWhereUniqueInput | null;
  breeder?: BreederWhereUniqueInput | null;
  buyer?: BuyerWhereUniqueInput | null;
};
