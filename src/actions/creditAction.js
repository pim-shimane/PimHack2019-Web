export const SPLIT_CREDIT = "SPLIT_CREDIT";

export function splitCredit(records, needCredit, expartSubject, course) {
  return {
    type: SPLIT_CREDIT,
    records: records,
    needCredit: needCredit,
    expartSubject: expartSubject,
    course: course
  };
}
