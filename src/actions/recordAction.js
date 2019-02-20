export const ADD_RECORD = "ADD_RECORD";

export function addRecord(record, needCredit) {
  return {
    type: ADD_RECORD,
    record: record,
    needCredit: needCredit
  };
}
