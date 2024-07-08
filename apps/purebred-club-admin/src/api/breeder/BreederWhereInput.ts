import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BreederWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  profilePhoto?: JsonFilter;
  messages?: MessageListRelationFilter;
  user?: UserWhereUniqueInput;
};
