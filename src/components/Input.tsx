import CheckBox from "./CheckBox";
import type { Task } from "../models/Task";
import { styled } from '../stitches.config';
import { KeyboardEvent, useState } from "react";
import { generateRandomUUID } from '../utils/index';

const Container = styled('div', {
  padding: '$md',
  display: 'flex',
  marginBottom: '$md',
  borderRadius: '$md',
  alignItems: 'center',
  background: '$component',
  boxSizing: 'border-box',
});

const Input = styled('input', {
  flex: 1,
  height: '100%',
  color: '$text',
  border: 'none',
  display: 'flex',
  outline: 'none',
  background: '$component',
});


type Props = {
  onTaskAdd: (todo: Task) => void
}

function TaskInput({ onTaskAdd }: Props) {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const buildTask = (text: string, isCompleted: boolean): Task => {
    return {
      id: generateRandomUUID(),
      isCompleted,
      text
    };
  }

  const resetState = (inputInstance: HTMLInputElement): void => {
    inputInstance.value = '';
    setIsCompleted(false);
  }

  const handleOnKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key !== 'Enter') return;

    const inputEl = event.currentTarget;
    
    if (inputEl.value.length === 0) {
      alert('Type some text');
      return;
    }

    onTaskAdd(buildTask(inputEl.value, isCompleted));
    resetState(inputEl);
  }

  return (
    <Container>
      <CheckBox value={isCompleted} onChange={setIsCompleted}></CheckBox>
      <Input
        onKeyPress={handleOnKeyPress}
        placeholder="Type your text here"
        name="input"
        type="text">
      </Input>
    </Container>
  );
}

export default TaskInput;