import { InputJsonValue } from "../../types";
import { MessageUpdateManyWithoutBreedersInput } from "./MessageUpdateManyWithoutBreedersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BreederUpdateInput = {
  name?: string | null;
  profilePhoto?: InputJsonValue;
  messages?: MessageUpdateManyWithoutBreedersInput;
  user?: UserWhereUniqueInput | null;
};
