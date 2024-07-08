import { JsonValue } from "type-fest";
import { Message } from "../message/Message";
import { User } from "../user/User";

export type Breeder = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  profilePhoto: JsonValue;
  messages?: Array<Message>;
  user?: User | null;
};
