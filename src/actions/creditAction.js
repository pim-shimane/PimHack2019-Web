export const SPLIT_CREDIT = "SPLIT_CREDIT";

export function splitCredit(records, needCredit) {
  return {
    type: SPLIT_CREDIT,
    records: records,
    needCredit: needCredit
  };
}
