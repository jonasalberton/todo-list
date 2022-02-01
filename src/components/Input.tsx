import { KeyboardEvent } from "react";

function Input() {
  const enterKey = 'Enter';

  function handleKeyPress(event: KeyboardEvent) {
    if (event.key !== enterKey) return;

    console.log('Key is Enter');
    

    
  }
  
  return (
    <div>

       <input onKeyPress={handleKeyPress} name="teste" type="text"></input>
    </div>
  );
}

export default Input;