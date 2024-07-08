import { Buyer as TBuyer } from "../api/buyer/Buyer";

export const BUYER_TITLE_FIELD = "name";

export const BuyerTitle = (record: TBuyer): string => {
  return record.name?.toString() || String(record.id);
};
