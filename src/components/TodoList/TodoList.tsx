import { useState } from "react";
import { ITodo, ITodoList } from "types/data";
import { CreateTodoForm } from "../CreateTodoForm";
import { Modal } from "../Modal";
import { TodoCard } from "../TodoCard";
import { TodoItem } from "../TodoItem";
import { AddTodoInModal } from "./components/AddTodoInModal";

export const TodoList: React.FC = () => {
  console.log("LIST render");
  const [todos, setTodos] = useState<ITodoList>({});
  const [activeTodo, setActiveTodo] = useState<number | null>(null);

  const addTodo = (todo: ITodo) => {
    setTodos({ ...todos, [todo.id]: todo });
  };

  const handleItemClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target instanceof HTMLInputElement) {
      const todoId = Number(event.target.getAttribute("data-id"));
      todos[todoId] = { ...todos[todoId], isCompleted: event.target.checked };
      setTodos({ ...todos });
    } else if (event.target instanceof HTMLTableCellElement) {
      const todoId = Number(event.target.getAttribute("data-id"));
      setActiveTodo(todoId);
    } else if (event.target instanceof HTMLButtonElement) {
      const todoId = Number(event.target.getAttribute("data-id"));
      delete todos[todoId];
      setTodos({ ...todos });
    }
  };

  const tableRows = Object.values(todos).map((todo) => {
    return <TodoItem key={todo.id} item={todo} />;
  });

  return (
    <>
      <CreateTodoForm addTodo={addTodo} />
      <div className="todos-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
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
            todo={todos[activeTodo]}
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
