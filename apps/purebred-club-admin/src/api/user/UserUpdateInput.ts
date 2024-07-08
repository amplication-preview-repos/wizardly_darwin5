import { InputJsonValue } from "../../types";
import { BreederUpdateManyWithoutUsersInput } from "./BreederUpdateManyWithoutUsersInput";
import { BuyerUpdateManyWithoutUsersInput } from "./BuyerUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  breeders?: BreederUpdateManyWithoutUsersInput;
  buyers?: BuyerUpdateManyWithoutUsersInput;
};
