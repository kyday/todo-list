import { ADD_TODO_LIST } from "../types";

//actions
export const addTodo = (value) => {
  return {
    type: ADD_TODO_LIST,
    payload: {
      text: value,
    },
  };
};
