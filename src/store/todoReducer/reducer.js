import { ADD_TODO_LIST } from "../types";

const initalState = [
  {
    text: "Todo-List 입니다.",
  },
];

const todoListReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TODO_LIST:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default todoListReducer;
