import { list } from "../mocks/list";
import { Task } from "../models/Task";
import LocalStorage from '../services/localStorageService';

let taskList: Task[] = LocalStorage.getTasks();

const setTaskList = (list: Task[]) => {
  taskList = Array.from(list);
  LocalStorage.setTasks(list);
}

const getTaskList = () => {
  return Array.from(taskList);
}


export {
  setTaskList,
  getTaskList
}