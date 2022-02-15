import CheckBox from "./CheckBox";
import type { Task } from "../models/Task";
import { styled } from '../stitches.config';
import { generateRandomId } from '../utils/index';
import { KeyboardEvent, useState } from "react";

const Container = styled('div', {
  display: 'flex',
  background: 'white',
  alignItems: 'center',
  borderRadius: '$md',
  boxSizing: 'border-box',
  padding: '$md',
  marginBottom: '$md'
})

const Input = styled('input', {
  height: '100%',
  display: 'flex',
  flex: '1',
  border: 'none',
  outline: 'none',
  color: '$textColor'
})

type Props = {
  onAddNew: (todo: Task) => void
}

function TodoInput({ onAddNew }: Props) {
  const [checkBoxValue, setCheckBoxValue] = useState<boolean>(false);
  const enterKey = 'Enter';

  const createTodo = (text: string, isCompleted: boolean): Task => {
    return {
      id: generateRandomId(),
      isCompleted,
      text
    };
  }

  const resetState = (inputInstance: HTMLInputElement): void => {
    inputInstance.value = '';
    setCheckBoxValue(false);
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key !== enterKey) return;

    const inputEl = event.currentTarget;
    
    if (inputEl.value.length === 0) {
      alert('type some text');
      return;
    }

    onAddNew(createTodo(inputEl.value, checkBoxValue));
    resetState(inputEl);
  }

  return (
    <Container>
      <CheckBox value={checkBoxValue} onChange={setCheckBoxValue}></CheckBox>
      <Input
        onKeyPress={handleKeyPress}
        placeholder="Type your text here"
        name="teste"
        type="text">
      </Input>
    </Container>
  );
}

export default TodoInput;