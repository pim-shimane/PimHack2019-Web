export const CHANGE_COURSE = "CHANGE_COURSE";

export function changeCourse(course) {
  return {
    type: CHANGE_COURSE,
    course: course
  };
}
