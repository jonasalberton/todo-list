import { KeyboardEvent } from "react";
import { Todo } from "../models/Todo";
import { generateRandomId } from '../utils/index';
import { styled } from '../stitches.config';
import CheckBox from "./CheckBox";

const Container = styled('div', {
  width: '100%',
  height: '40px',
  display: 'flex',
  alignItems: 'center'
})

const Input = styled('input', {
  width: '100%',
  height: '100%',
  border: 'none',
  outline: 'none'
})

type Props = {
  onAddNew: (todo: Todo) => void
}

function TodoInput(props: Props) {
  const enterKey = 'Enter';

  const createTodo = (text: string, isCompleted: boolean): Todo => {
    return {
      id: generateRandomId(),
      isCompleted,
      text
    };
  }

  const resetState = (inputInstance: HTMLInputElement): void => {
    inputInstance.value = '';
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key !== enterKey) return;

    const inputEl = event.currentTarget;
    resetState(inputEl);
    props.onAddNew(createTodo(inputEl.value, true));
  }

  return (
    <Container>
      <CheckBox></CheckBox>
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