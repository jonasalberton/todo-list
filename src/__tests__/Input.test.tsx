
import Input from '../components/Input';
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Task } from '../models/Task';



describe("<Input/>", () => {
  test("Should create a no-completed task", async () => {
    let mock = {} as Task;

    const onTaskAddMock = (value: Task) => {
      mock = value;
    };


    const { findByPlaceholderText } = render(<Input onTaskAdd={onTaskAddMock} />);
    const component = await findByPlaceholderText('Type your text here');
    const todoText = 'test 1';

    fireEvent.change(component, { target: { value: todoText } });
    fireEvent.keyPress(component, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(mock.id).not.toBeUndefined();
    expect(mock.text).toBe(todoText);
    expect(mock.isCompleted).toBeFalsy();
  });


  test("Should create a completed task", async () => {
    let mock = {} as Task;
    const onTaskAddMock = (value: Task) => {
      mock = value;
    };

    const { findByPlaceholderText } = render(<Input onTaskAdd={onTaskAddMock} />);
    const input = await findByPlaceholderText('Type your text here');
    const checkBox = input.previousSibling?.firstChild as Element;
    const todoText = 'test 1';

    fireEvent.change(input, { target: { value: todoText } });
    fireEvent.click(checkBox);
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });


    expect(mock.id).not.toBeUndefined();
    expect(mock.text).toBe(todoText);
    expect(mock.isCompleted).toBeTruthy();
  });
});