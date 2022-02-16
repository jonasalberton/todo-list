import Input from "./Input";
import { useState } from "react";
import CheckBox from "./CheckBox";
import Filter from '../models/Filter';
import type { Task } from '../models/Task';
import { styled } from '../stitches.config';
import * as TaskStore from '../store/taskStore';

const Container = styled('div', {
  display: 'flex',
  background: '$component',
  alignItems: 'center',
  boxSizing: 'border-box',
  padding: '$md',
  borderBottom: '1px solid $border',
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
    completed: {
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

type State = {
  viewList: Task[],
  filter: Filter,
}

function TodoList() {
  const [state, setState] = useState<State>({viewList: TaskStore.getTaskList(), filter: 'All'});

  const addTask = (task: Task) => {
    const newList = [task, ...TaskStore.getTaskList()];
    TaskStore.setTaskList(newList);
    updateListView(newList);
  }

  const updateListView = (viewList: Task[]) => {
    setState({
      ...state,
      viewList
    })
  }

  const onChangeTaskStatus = (taskId: string, value: boolean) => {
    const newList = TaskStore.getTaskList().map(item => {
      if (item.id === taskId) item.isCompleted = value;
      return item;
    });

    TaskStore.setTaskList(newList);
    updateListView(newList);
  }

  const removeCompletedItens = () => {
    const newItens = TaskStore.getTaskList().filter(item => item.isCompleted !== true);
    TaskStore.setTaskList(newItens);
    updateListView(newItens);
  }

  const showActiveItens = () => {
    setState({
      filter: 'Active',
      viewList: TaskStore.getTaskList().filter(item => !item.isCompleted)
    });
  }

  const showCompletedItens = () => {
    setState({
      filter: 'Completed',
      viewList: TaskStore.getTaskList().filter(item => item.isCompleted)
    });
  }

  const showAllItens = () => {
    setState({
      filter: 'All',
      viewList: TaskStore.getTaskList()
    });
  }

  return (
    <div>
      <Input onAddNew={addTask}></Input>
      {
        state.viewList.map((item, index) =>
          <Container key={item.id} border={index === 0 ? 'roundTop' : 'noBorder'} completed={item.isCompleted}>
            <CheckBox 
              value={item.isCompleted}
              onChange={(value) => onChangeTaskStatus(item.id, value)}/>
              {item.text}
          </Container>)}

      {
        state.viewList.length > 0 &&
        <Container border="roundBottom" justify="between">
          <div>{state.viewList.length} itens left</div>
          <div>
            <Button onClick={showAllItens}>All</Button>
            <Button onClick={showActiveItens}>Active</Button>
            <Button onClick={showCompletedItens}>Completed</Button>
          </div>
          <Button onClick={removeCompletedItens}>Clear Completed</Button>
        </Container>
      }
    </div>
  );
}

export default TodoList;