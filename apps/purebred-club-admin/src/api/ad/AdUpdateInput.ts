import { InputJsonValue } from "../../types";
import { MessageUpdateManyWithoutAdsInput } from "./MessageUpdateManyWithoutAdsInput";

export type AdUpdateInput = {
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
  messages?: MessageUpdateManyWithoutAdsInput;
};
