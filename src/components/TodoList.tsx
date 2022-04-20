import Input from "./Input";
import Footer from './Footer';
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

  const onChangeFilter = (filter: Filter) => {
    let map = new Map<Filter, () => void>();
    map.set('Active', showActiveItens);
    map.set('All', showAllItens);
    map.set('Completed', showCompletedItens)
  
    let fn = map.get(filter);
    fn && fn();
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
          <Footer
            length={state.taskList.length}
            filter={state.filter}
            onChangeFilter={onChangeFilter}
            onClearCompleted={removeCompletedItens}
          />
      }
    </div>
    {state.taskList.length > 0 &&  <DragMesage>Segure e arraste para ordenar as tarefas</DragMesage>}
  </>
  );
}

export default TodoList;