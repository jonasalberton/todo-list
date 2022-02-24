import Input from "./Input";
import { useState } from "react";
import CheckBox from "./CheckBox";
import Filter from '../models/Filter';
import type { Task } from '../models/Task';
import { styled } from '../stitches.config';
import * as TaskStore from '../store/taskStore';

const Container = styled('div', {
  display: 'flex',
  padding: '$md',
  boxShadow: '$md',
  alignItems: 'center',
  boxSizing: 'border-box',
  background: '$component',
  borderBottom: '1px solid $border',
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
    completed: {
      true: {
        color: '$disableText',
        textDecoration: 'line-through'
      }
    }
  }
});

const Button = styled('button', {
  color: '$text',
  border: 'none',
  padding: '0 5px',
  cursor: 'pointer',
  background: 'none',
  '&:hover': {
    opacity: '.6'
  },
  variants: {
    selected: {
      true: {
        color: '$primary'
      }
    }
  }
});

const Typograph = styled('span', {
  fontSize: '$sm',
});



type State = {
  taskList: Task[],
  filter: Filter,
}

function TodoList() {
  const [state, setState] = useState<State>({taskList: TaskStore.getTaskList(), filter: 'All'});

  const updateData = (list: Task[]) => {
    TaskStore.setTaskList(list);
    setState({
      ...state,
      taskList: list
    })
  }

  const handleAddTask = (task: Task) => {
    const newList = [task, ...TaskStore.getTaskList()];
    updateData(newList);
  }

  const onChangeTaskStatus = (taskId: string, newValue: boolean) => {
    const newList = TaskStore.getTaskList().map(item => {
      if (item.id === taskId) item.isCompleted = newValue;
      return item;
    });

    updateData(newList);
  }

  const removeCompletedItens = () => {
    const newItens = TaskStore.getTaskList().filter(item => !item.isCompleted);
    updateData(newItens);
  }

  const showActiveItens = () => {
    setState({
      filter: 'Active',
      taskList: TaskStore.getTaskList().filter(item => !item.isCompleted)
    });
  }

  const showCompletedItens = () => {
    setState({
      filter: 'Completed',
      taskList: TaskStore.getTaskList().filter(item => item.isCompleted)
    });
  }

  const showAllItens = () => {
    setState({
      filter: 'All',
      taskList: TaskStore.getTaskList()
    });
  }

  return (
    <div>
      <Input onTaskAdd={handleAddTask}></Input>
      {
        state.taskList.map((item, index) =>
          <Container key={item.id} border={index === 0 ? 'roundTop' : 'noBorder'} completed={item.isCompleted}>
            <CheckBox 
              value={item.isCompleted}
              onChange={(value) => onChangeTaskStatus(item.id, value)}/>
              {item.text}
          </Container>)}

      {
        state.taskList.length > 0 &&
        <Container border="roundBottom" justify="between">
          <Typograph>{state.taskList.length} itens left</Typograph>
          <div>
            <Button onClick={showAllItens} selected={state.filter === 'All'}>
              <Typograph >All</Typograph>
            </Button>

            <Button onClick={showActiveItens} selected={state.filter === 'Active'}>
              <Typograph >Active</Typograph>
            </Button>

            <Button onClick={showCompletedItens} selected={state.filter === 'Completed'}>
              <Typograph >Completed</Typograph>
            </Button>
          </div>
            <Button onClick={removeCompletedItens}>
              <Typograph>Clear Completed</Typograph>
            </Button>
        </Container>
      }
    </div>
  );
}

export default TodoList;