import { JsonValue } from "type-fest";
import { Message } from "../message/Message";

export type Ad = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  breed: string | null;
  typeField?: "Option1" | null;
  color: string | null;
  weight: number | null;
  tests: string | null;
  photos: JsonValue;
  publicationStartDate: Date | null;
  publicationEndDate: Date | null;
  status?: "Option1" | null;
  messages?: Array<Message>;
};
