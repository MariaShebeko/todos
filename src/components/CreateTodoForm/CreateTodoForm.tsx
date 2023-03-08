import React, { FormEvent, useEffect, useRef, useState } from "react";
import { ITodo } from "types/data";

interface IFormProps {
  addTodo: (todo: ITodo) => void;
  cancelButtonActive?: boolean;
  onClose?: () => void;
}

interface CustomElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  description: HTMLInputElement;
}
interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

export const CreateTodoForm: React.FC<IFormProps> = ({
  addTodo,
  cancelButtonActive = false,
  onClose = null,
}) => {
  const [error, setError] = useState(false);

  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (titleRef.current) titleRef.current.focus();
  }, []);

  const onFormSubmit = (event: FormEvent<CustomForm>) => {
    event.preventDefault();
    const target = event.currentTarget.elements;

    const data = {
      title: target.title.value,
      description: target.description.value,
    };

    const todo = {
      id: Date.now(),
      title: data.title,
      description: data.description,
      isCompleted: false,
    };

    addTodo(todo);
    event.currentTarget.reset();
  };

  const onFormClose = (event: React.FormEvent) => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onFormSubmit} className="form">
        <div className="input-wrapper">
          <label htmlFor="title" className="label">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            ref={titleRef}
            className={error ? `input error` : `input`}
            required
          />
          {error ? <p className="error-message">This field is empty</p> : ""}
        </div>

        <div className="input-wrapper">
          <label htmlFor="description" className="label">
            Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            className="input"
          />
        </div>
        {cancelButtonActive && (
          <div className="button-wrapper">
            <button type="button" className="button" onClick={onFormClose}>
              Cancel
            </button>
          </div>
        )}
        <button type="submit" className="button">
          Create
        </button>
      </form>
    </div>
  );
};
