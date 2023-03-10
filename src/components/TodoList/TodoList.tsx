import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { AppDispatch } from "redux/store";
import { toggleTodoAction } from "redux/todos/todosSlice";
import { CreateTodoForm } from "../CreateTodoForm";
import { Modal } from "../Modal";
import { TodoCard } from "../TodoCard";
import { TodoItem } from "../TodoItem";
import { AddTodoInModal } from "./components/AddTodoInModal";

export const TodoList: React.FC = () => {
  console.log("LIST render");
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch<AppDispatch>();

  const [activeTodo, setActiveTodo] = useState<number | null>(null);

  const handleItemClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target instanceof HTMLInputElement) {
      const todoId = Number(event.target.getAttribute("data-id"));
      const todo = todos[todoId];

      dispatch(toggleTodoAction(todo));
    } else if (event.target instanceof HTMLTableCellElement) {
      const todoId = Number(event.target.getAttribute("data-id"));
      setActiveTodo(todoId);
    }
  };

  const tableRows = Object.values(todos).map((todo) => {
    return <TodoItem key={todo.id} item={todo} />;
  });

  return (
    <>
      <CreateTodoForm />
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
      <AddTodoInModal />
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
