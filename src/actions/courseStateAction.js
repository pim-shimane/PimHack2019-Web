export const ADD_STATE = "ADD_STATE";

export function addState(array) {
  return {
    type: ADD_STATE,
    array: array
  };
}
