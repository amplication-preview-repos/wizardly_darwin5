import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BreederListRelationFilter } from "../breeder/BreederListRelationFilter";
import { BuyerListRelationFilter } from "../buyer/BuyerListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  breeders?: BreederListRelationFilter;
  buyers?: BuyerListRelationFilter;
};
