import { useState } from "react";
import { Todo } from "../models/Todo";
import Input from "./Input";

function TodoList() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  function addTodo(todo: Todo) {
    setTodoList([...todoList, todo])
  }

  return (
    <div>
      <Input onAddNew={addTodo}></Input>
      { todoList.map((item) => <div key={item.id}> item {item.text} </div>)}
    </div>
  );
}

export default TodoList;