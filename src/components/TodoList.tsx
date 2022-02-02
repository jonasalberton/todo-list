import { useState } from "react";
import TodoInput from "./TodoInput";
import { Todo } from "../models/Todo";

function TodoList() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) =>  {
    setTodoList([...todoList, todo]);
  }


  return (
    <div>
      <TodoInput onAddNew={addTodo}></TodoInput>
      { todoList.map((item) => <div key={item.id}> item {item.id} </div>)}
    </div>
  );
}

export default TodoList;