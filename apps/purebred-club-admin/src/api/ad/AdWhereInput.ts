import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type AdWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  breed?: StringNullableFilter;
  typeField?: "Option1";
  color?: StringNullableFilter;
  weight?: FloatNullableFilter;
  tests?: StringNullableFilter;
  photos?: JsonFilter;
  publicationStartDate?: DateTimeNullableFilter;
  publicationEndDate?: DateTimeNullableFilter;
  status?: "Option1";
  messages?: MessageListRelationFilter;
};
