import Input from "./Input";
import { useState } from "react";
import CheckBox from "./CheckBox";
import Filter from '../models/Filter';
import type { Task } from '../models/Task';
import { styled } from '../stitches.config';
import * as TaskStore from '../store/taskStore';
import Container from "../elements/Container";
import DraggableItem from "../elements/DraggableItem";

const DragMesage = styled('div', {
  marginTop: '$lg',
  textAlign: 'center'
})

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
  dragOver?: Task,
  dragIndex: number
}

function TodoList() {
  const [state, setState] = useState<State>({taskList: TaskStore.getTaskList(), filter: 'All', dragIndex: 0});

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
      ...state,
      filter: 'Active',
      taskList: TaskStore.getTaskList().filter(item => !item.isCompleted)
    });
  }

  const showCompletedItens = () => {
    setState({
      ...state,
      filter: 'Completed',
      taskList: TaskStore.getTaskList().filter(item => item.isCompleted)
    });
  }

  const showAllItens = () => {
    setState({
      ...state,
      filter: 'All',
      taskList: TaskStore.getTaskList()
    });
  }

  const handleOnDragStart = (event: React.DragEvent<HTMLDivElement>, item: Task, index: number) => {
    event.dataTransfer.setData('id', item.id);
    setState({
      ...state,
      dragIndex: index
    })
  };
  
  const handleOnDragEnter = (item: Task) => {
    setState({
      ...state,
      dragOver: item
    })
  }

  const handleOnDrop = (event: React.DragEvent<HTMLDivElement>, dropOnItem: Task) => {
    // TODO Refact the code
    const itemDragId = event.dataTransfer.getData('id');

    if (!itemDragId) return;

    const itemDragedIndex = state.taskList.findIndex(item => item.id === itemDragId);
    const itemDropedIndex = state.taskList.findIndex(item => item.id === dropOnItem.id);

    const copyList = [...state.taskList];

    const task = copyList.splice(itemDragedIndex, 1)[0];

    copyList.splice(itemDropedIndex, 0, task);

    updateData(copyList);
  }


  const handleDragEnd = () => {
    setState({
      ...state,
      dragOver: undefined,
      dragIndex: 0
    })
  }

  return (
    <>
    <div>
      <Input onTaskAdd={handleAddTask}></Input>
      {
        state.taskList.map((item, index) =>
        <DraggableItem 
        key={item.id}
        marginTop={state.dragOver?.id === item.id  && state.dragIndex > index}
        marginBotton={state.dragOver?.id === item.id && state.dragIndex < index}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleOnDrop(e, item)}
        >
          <Container
            draggable
            onDragStart={(e) => handleOnDragStart(e, item, index)}
            onDragEnter={(e) => handleOnDragEnter(item)}
            onDragEnd={handleDragEnd}
            border={index === 0 ? 'roundTop' : 'noBorder'}
            completed={item.isCompleted}>
            <CheckBox 
              value={item.isCompleted}
              onChange={(value) => onChangeTaskStatus(item.id, value)}/>
              {item.text}
          </Container>
        </DraggableItem>
          )}

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
    <DragMesage>Drag and Drop to reorder itens</DragMesage>
  </>
  );
}

export default TodoList;