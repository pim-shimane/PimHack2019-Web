export const CHANGE_COURSE = "CHANGE_COURSE";

export function changeCourse(course, needCredit, expartRequired) {
  return {
    type: CHANGE_COURSE,
    course: course,
    needCredit: needCredit,
    expartRequired: expartRequired
  };
}
