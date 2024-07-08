import { JsonValue } from "type-fest";
import { Breeder } from "../breeder/Breeder";
import { Buyer } from "../buyer/Buyer";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  breeders?: Array<Breeder>;
  buyers?: Array<Buyer>;
};
