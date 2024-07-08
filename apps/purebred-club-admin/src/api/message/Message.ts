import { Ad } from "../ad/Ad";
import { Breeder } from "../breeder/Breeder";
import { Buyer } from "../buyer/Buyer";

export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  sentAt: Date | null;
  ad?: Ad | null;
  breeder?: Breeder | null;
  buyer?: Buyer | null;
};
