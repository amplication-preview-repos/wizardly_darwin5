import { InputJsonValue } from "../../types";
import { BreederCreateNestedManyWithoutUsersInput } from "./BreederCreateNestedManyWithoutUsersInput";
import { BuyerCreateNestedManyWithoutUsersInput } from "./BuyerCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  breeders?: BreederCreateNestedManyWithoutUsersInput;
  buyers?: BuyerCreateNestedManyWithoutUsersInput;
};
