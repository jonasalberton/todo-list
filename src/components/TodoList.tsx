import { useState } from "react";
import Input from "./Input";
import type { Task } from '../models/Task';
import { styled } from '../stitches.config';
import CheckBox from "./CheckBox";
import { list } from '../mocks/list';

const Container = styled('div', {
  display: 'flex',
  background: '$component',
  alignItems: 'center',
  boxSizing: 'border-box',
  borderBottom: '1px solid $border',
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
    },
    justify: {
      between: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    },
    disabled: {
      true: {
        color: '$disableText',
        textDecoration: 'line-through'
      }
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
  const [todoList, setTodoList] = useState<Task[]>(list);

  const addTask = (todo: Task) =>  {
    setTodoList([todo, ...todoList]);
  }

  const onChangeTaskStatus = (taskId: string, value: boolean) => {
    const todoListUpdated = todoList.map(item => {
      
      if (item.id === taskId) {
        item.isCompleted= value;
      }

      return item;
    })

    setTodoList(todoListUpdated);
  }


  const handleClearCompletedItens = () => {
    setTodoList([...todoList.filter(item => item.isCompleted !== true)]);
  }

  return (
    <div>
      <Input onAddNew={addTask}></Input>
      {
        todoList.map((item, index) =>
          <Container key={item.id} border={index === 0 ? 'roundTop' : 'noBorder'} disabled={item.isCompleted}>
            <CheckBox 
              value={item.isCompleted}
              onChange={(value) => onChangeTaskStatus(item.id, value)}/>
              {item.text}
          </Container>)}

      {
        todoList.length > 0 &&
        <Container border="roundBottom" justify="between">
          <div>{todoList.length} itens left</div>
          <div>
            <Button>All</Button>
            <Button>Active</Button>
            <Button>Completed</Button>
          </div>
          <Button onClick={handleClearCompletedItens}>Clear Completed</Button>
        </Container>
      }
    </div>
  );
}

export default TodoList;