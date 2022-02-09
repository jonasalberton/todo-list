import { useState } from "react";
import Input from "./Input";
import { Todo } from "../models/Todo";
import { styled } from '../stitches.config';

const Container = styled('div', {
  display: 'flex',
  background: 'white',
  alignItems: 'center',
  borderRadius: '$md',
  boxSizing: 'border-box',
  padding: '$md'
})

function TodoList() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) =>  {
    setTodoList([...todoList, todo]);
  }


  return (
    <div>
      <Input onAddNew={addTodo}></Input>
      { todoList.map((item) => <Container key={item.id}> item {item.id} </Container>)}
    </div>
  );
}

export default TodoList;