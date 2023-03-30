import { useState, useEffect } from "react";
import { ITodo } from "types/data";
import { CreateTodoForm } from "../CreateTodoForm";
import { Modal } from "../Modal";
import { TodoCard } from "../TodoCard";
import { TodoItem } from "../TodoItem";
import { AddTodoInModal } from "./components/AddTodoInModal";
import {
  fetchTodos,
  getTodoById,
  addTodoSer,
  deleteTodo,
  updateTodoStatus,
} from "services/todos-api";

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos().then((data) => setTodos(data));
  }, []);

  console.log("LIST render");

  const [activeTodo, setActiveTodo] = useState<ITodo | null>(null);

  const addTodo = (todo: ITodo) => {
    addTodoSer(todo).then((data) => setTodos([...todos, data]));
  };

  const handleItemClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target instanceof HTMLInputElement) {
      const todoId = event.target.getAttribute("data-id");
      const todo = todos.find((item) => item._id === todoId);
      const updateTodo = {
        isCompleted: !todo?.isCompleted,
      };
      updateTodoStatus(todoId, updateTodo).then((data) =>
        setTodos(todos.map((todo) => (todo._id === data._id ? data : todo)))
      );
    } else if (event.target instanceof HTMLTableCellElement) {
      const todoId = event.target.getAttribute("data-id");
      getTodoById(todoId).then((data) => setActiveTodo(data));
    } else if (event.target instanceof HTMLButtonElement) {
      const todoId = event.target.getAttribute("data-id");
      deleteTodo(todoId).then(() => {
        setTodos([...todos.filter((todo) => todo._id !== todoId)]);
      });
    }
  };

  console.log("activeTodo", activeTodo);

  const tableRows = todos.map((todo) => {
    return <TodoItem key={todo._id} item={todo} />;
  });

  return (
    <>
      <CreateTodoForm addTodo={addTodo} />
      <div className="todos-wrapper">
        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>TITLE</th>
              <th>DESCRIPTION</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody onClick={handleItemClick}>
            {tableRows.map((element) => {
              return element;
            })}
          </tbody>
        </table>
      </div>
      <AddTodoInModal addTodo={addTodo} />
      {activeTodo && (
        <Modal
          onClose={() => {
            setActiveTodo(null);
          }}
        >
          <TodoCard
            todo={activeTodo}
            onClose={() => {
              setActiveTodo(null);
            }}
            onCheckClick={handleItemClick}
          />
        </Modal>
      )}
    </>
  );
};
