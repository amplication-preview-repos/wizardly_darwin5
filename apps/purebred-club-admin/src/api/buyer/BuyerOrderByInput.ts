import { SortOrder } from "../../util/SortOrder";

export type BuyerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  profilePhoto?: SortOrder;
  userId?: SortOrder;
};
