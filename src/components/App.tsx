import React, { useState, useRef, useEffect } from "react";
import { ITodo } from "../types/data";
import { TodoList } from "./TodoList";
import "./App.css";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState(false);

  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (titleRef.current) titleRef.current.focus();
  }, []);

  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setTitle(event.target.value);
  };

  const onDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // check if the value is empty
    if (title.trim().length === 0) {
      setError(true);
      return;
    }

    const todo: ITodo = {
      id: Date.now(),
      title: title,
      description: description,
      isCompleted: false,
    };

    setTodos([...todos, todo]);

    setTitle("");
    setDescription("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      })
    );
  };

  return (
    <div className="App">
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
              value={title}
              onChange={onTitleChange}
              ref={titleRef}
              className={error ? `input error` : `input`}
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
              value={description}
              onChange={onDescriptionChange}
              className="input"
            />
          </div>
          <button type="submit" className="button">
            Create
          </button>
        </form>
      </div>
      <div className="todos-wrapper">
        <TodoList items={todos} toggleTodo={toggleTodo} />
      </div>
    </div>
  );
};

export default App;
