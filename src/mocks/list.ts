import { Task } from "../models/Task";

const list: Task[] = [
  {
    id: '1',
    isCompleted: false,
    text: 'Fix Dark Theme'
  },
  {
    id: '2',
    isCompleted: false,
    text: 'Implements delete feature'
  },
  {
    id: '3',
    isCompleted: false,
    text: 'Implements Drag and Drop feature'
  },
  {
    id: '4',
    isCompleted: false,
    text: 'Fix mobile styles'
  },
  {
    id: '5',
    isCompleted: true,
    text: 'Add completed State style'
  }
];

export { list };