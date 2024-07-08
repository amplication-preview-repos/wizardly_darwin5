import { Breeder as TBreeder } from "../api/breeder/Breeder";

export const BREEDER_TITLE_FIELD = "name";

export const BreederTitle = (record: TBreeder): string => {
  return record.name?.toString() || String(record.id);
};
