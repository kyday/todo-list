import React, { useState } from "react";
import { addTodo } from "../store/todoReducer/actions";
import { useDispatch } from "react-redux";

function NewNoteInput(props) {
  const [data, setData] = useState("");

  const onChangeInput = (e) => {
    const { value } = e.target;
    setData(value);
  };

  const onSubmit = () => {
    dispatch(addTodo(data));
    setData("");
  };

  const dispatch = useDispatch();

  return (
    <div>
      <input
        type='text'
        name='note'
        value={data}
        placeholder='Note'
        onChange={onChangeInput}
      />
      <button onClick={onSubmit}>Add note</button>
    </div>
  );
}

export default NewNoteInput;
