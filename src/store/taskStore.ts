import { list } from "../mocks/list";
import { Task } from "../models/Task";

let taskList: Task[] = list;

const setTaskList = (list: Task[]) => {
  taskList = Array.from(list);;
}

const getTaskList = () => {
  return Array.from(taskList);
}


export {
  setTaskList,
  getTaskList
}