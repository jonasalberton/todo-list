import { KeyboardEvent } from "react";
import { Todo } from "../models/Todo";

type Props = {
  onAddNew: (todo: Todo) => void
}

function Input(props: Props) {
  const enterKey = 'Enter';

  function handleKeyPress(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key !== enterKey) return;

    const value = event.currentTarget.value;
    props.onAddNew({id: 12, isCompleted: false, text: value});
  }
  
  return (
    <div>
       <input
        onKeyPress={handleKeyPress}
        name="teste"
        type="text">
      </input>
    </div>
  );
}

export default Input;