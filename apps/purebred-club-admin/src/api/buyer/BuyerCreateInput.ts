import { InputJsonValue } from "../../types";
import { MessageCreateNestedManyWithoutBuyersInput } from "./MessageCreateNestedManyWithoutBuyersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BuyerCreateInput = {
  name?: string | null;
  profilePhoto?: InputJsonValue;
  messages?: MessageCreateNestedManyWithoutBuyersInput;
  user?: UserWhereUniqueInput | null;
};
