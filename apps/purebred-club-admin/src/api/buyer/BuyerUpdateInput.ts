import { InputJsonValue } from "../../types";
import { MessageUpdateManyWithoutBuyersInput } from "./MessageUpdateManyWithoutBuyersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BuyerUpdateInput = {
  name?: string | null;
  profilePhoto?: InputJsonValue;
  messages?: MessageUpdateManyWithoutBuyersInput;
  user?: UserWhereUniqueInput | null;
};
