import React from "react";
import { useSelector } from "react-redux";

function TodoListView(props) {
  const list = useSelector((state) => state.todoListReducer);
  console.log(list);
  return <div></div>;
}

export default TodoListView;
