import { InputJsonValue } from "../../types";
import { MessageCreateNestedManyWithoutBreedersInput } from "./MessageCreateNestedManyWithoutBreedersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BreederCreateInput = {
  name?: string | null;
  profilePhoto?: InputJsonValue;
  messages?: MessageCreateNestedManyWithoutBreedersInput;
  user?: UserWhereUniqueInput | null;
};
