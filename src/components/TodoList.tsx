import { useState } from "react";
import Input from "./Input";

function TodoList() {
  const [todoList, setTodoList] = useState([1,2,3,4,5,6,7,8,9]);

 

  return (
    <div>
      <Input></Input>
      { todoList.map((item) => <div key={item}> item {item} </div>)}
    </div>
  );
}

export default TodoList;