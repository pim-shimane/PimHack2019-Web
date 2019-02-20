export const ADD_RECORD = "ADD_RECORD";

export function addRecord(record) {
  return {
    type: ADD_RECORD,
    record: record
  };
}
