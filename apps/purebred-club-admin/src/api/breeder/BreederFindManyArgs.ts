import { BreederWhereInput } from "./BreederWhereInput";
import { BreederOrderByInput } from "./BreederOrderByInput";

export type BreederFindManyArgs = {
  where?: BreederWhereInput;
  orderBy?: Array<BreederOrderByInput>;
  skip?: number;
  take?: number;
};
