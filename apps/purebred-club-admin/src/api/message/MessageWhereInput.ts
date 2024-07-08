import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { AdWhereUniqueInput } from "../ad/AdWhereUniqueInput";
import { BreederWhereUniqueInput } from "../breeder/BreederWhereUniqueInput";
import { BuyerWhereUniqueInput } from "../buyer/BuyerWhereUniqueInput";

export type MessageWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  sentAt?: DateTimeNullableFilter;
  ad?: AdWhereUniqueInput;
  breeder?: BreederWhereUniqueInput;
  buyer?: BuyerWhereUniqueInput;
};
