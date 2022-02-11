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
  borderBottom: '1px solid #f6f6f6',
  padding: '$md',
  boxShadow: '$md',
  variants: {
    border: {
      roundTop: {
        borderRadius: '$md $md 0 0'
      },
      noBorder: {
        borderRadius: '0'
      },
      roundBottom: {
        borderRadius: '0 0 $md $md'
      },
    }
  }
});

const Button = styled('button', {
  border: 'none',
  background: 'none',
  padding: '0 5px',
  cursor: 'pointer',
  color: 'blue',
  '&:hover': {
    opacity: '.5'
  }

});

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
          </Container>)}

      {
        todoList.length > 0 &&
        <Container border={'roundBottom'}>
          <div>{todoList.length} itens left</div>
          <div>
            <Button>All</Button>
            <Button>Active</Button>
            <Button>Completed</Button>
          </div>
          <Button>Clear Completed</Button>
        </Container>
      }
    </div>
  );
}

export default TodoList;