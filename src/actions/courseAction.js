export const CHANGE_COURSE = "CHANGE_COURSE";

export function changeCourse(course, needCredit, expartSubject) {
  return {
    type: CHANGE_COURSE,
    course: course,
    needCredit: needCredit,
    expartSubject: expartSubject
  };
}
