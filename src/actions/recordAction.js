export const REGISTER_RECORD = "REGISTER_RECORD";

export function registerRecords(records) {
  return {
    type: REGISTER_RECORD,
    records: records
  };
}
