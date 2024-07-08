import { SortOrder } from "../../util/SortOrder";

export type AdOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  breed?: SortOrder;
  typeField?: SortOrder;
  color?: SortOrder;
  weight?: SortOrder;
  tests?: SortOrder;
  photos?: SortOrder;
  publicationStartDate?: SortOrder;
  publicationEndDate?: SortOrder;
  status?: SortOrder;
};
