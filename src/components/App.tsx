import React, { useState, useRef, useEffect } from "react";
import { ITodo, ITodoList } from "../types/data";
import { TodoList } from "./TodoList";
import "./App.css";

const App: React.FC = () => {
  console.log("Form render");

  const [todos, setTodos] = useState<ITodoList>({});
  console.log("todos", todos);
  // console.log("  Array(todos.values)", Array.from(todos.values));

  // const [title, setTitle] = useState<string>("");
  // const [description, setDescription] = useState<string>("");
  const [error, setError] = useState(false);

  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (titleRef.current) titleRef.current.focus();
  }, []);

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("event", event);

    // check if the value is empty
    // if (title.trim().length === 0) {
    //   setError(true);
    //   return;
    // }

    const todo = {
      id: Date.now(),
      title: "",
      description: "",
      isCompleted: false,
    };

    setTodos({ ...todos, [todo.id]: todo });
  };

  useEffect(() => console.log("todos change"), [todos]);

  // const toggleTodo = (id: number) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.id !== id) return todo;

  //       return {
  //         ...todo,
  //         isCompleted: !todo.isCompleted,
  //       };
  //     })
  //   );
  // };

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
              // value={title}
              // onChange={onTitleChange}
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
              // value={description}
              // onChange={onDescriptionChange}
              className="input"
              required
            />
          </div>
          <button type="submit" className="button">
            Create
          </button>
        </form>
      </div>
      <div className="todos-wrapper">
        <TodoList
          items={todos}
          // toggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
};

export default App;
