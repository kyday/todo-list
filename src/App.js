import React from "react";
import NewNoteInput from "./components/NewNoteInput";
import TodoListView from "./components/TodoListView";

function App() {
  return (
    <div className='App'>
      <NewNoteInput />
      <TodoListView />
    </div>
  );
}

export default App;
