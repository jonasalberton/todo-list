import { useState } from "react";
import Input from "./Input";
import { Todo } from "../models/Todo";
import { styled } from '../stitches.config';
import CheckBox from "./CheckBox";

const Container = styled('div', {
  display: 'flex',
  background: 'white',
  alignItems: 'center',
  boxSizing: 'border-box',
  padding: '$md',
  boxShadow: '$md',
  variants: {
    border: {
      roundTop: {
        borderRadius: '$md $md 0 0'
      },
      noBorder: {
        borderRadius: '0'
      }
    }
  }
})

function TodoList() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) =>  {
    setTodoList([todo, ...todoList]);
  }

  return (
    <div>
      <Input onAddNew={addTodo}></Input>
      {
        todoList.map((item, index) =>
          <Container key={item.id} border={index === 0 ? 'roundTop' : 'noBorder'}>
            <CheckBox/>
              {item.text}
          </Container>)
      }
    </div>
  );
}

export default TodoList;