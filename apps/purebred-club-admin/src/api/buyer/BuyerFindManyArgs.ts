import { BuyerWhereInput } from "./BuyerWhereInput";
import { BuyerOrderByInput } from "./BuyerOrderByInput";

export type BuyerFindManyArgs = {
  where?: BuyerWhereInput;
  orderBy?: Array<BuyerOrderByInput>;
  skip?: number;
  take?: number;
};
