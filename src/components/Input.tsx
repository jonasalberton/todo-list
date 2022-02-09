import CheckBox from "./CheckBox";
import { KeyboardEvent } from "react";
import { Todo } from "../models/Todo";
import { styled } from '../stitches.config';
import { generateRandomId } from '../utils/index';

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
    props.onAddNew(createTodo(inputEl.value, true));
    resetState(inputEl);
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