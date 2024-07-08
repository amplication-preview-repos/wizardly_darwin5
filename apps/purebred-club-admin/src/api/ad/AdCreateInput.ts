import { InputJsonValue } from "../../types";
import { MessageCreateNestedManyWithoutAdsInput } from "./MessageCreateNestedManyWithoutAdsInput";

export type AdCreateInput = {
  name?: string | null;
  breed?: string | null;
  typeField?: "Option1" | null;
  color?: string | null;
  weight?: number | null;
  tests?: string | null;
  photos?: InputJsonValue;
  publicationStartDate?: Date | null;
  publicationEndDate?: Date | null;
  status?: "Option1" | null;
  messages?: MessageCreateNestedManyWithoutAdsInput;
};
