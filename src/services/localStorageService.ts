import { Task } from "../models/Task";
import Theme from "../models/Theme";

const THEME = 'THEME';
const TASKS = 'TASKS';

const setTheme = (theme: Theme): void => {
  localStorage.setItem(THEME, theme);
}

const getTheme = (): Theme => {
  return localStorage.getItem(THEME) as Theme;
}

const setTasks = (taskList: Task[]): void => {
  localStorage.setItem(TASKS, JSON.stringify(taskList));
}

const getTasks = (): Task[] => {
  return JSON.parse(localStorage.getItem(TASKS) || '[]');
}


const localStorageService = {
  setTheme,
  getTheme,
  setTasks,
  getTasks
}

export default localStorageService