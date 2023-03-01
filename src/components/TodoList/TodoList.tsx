import { ITodo } from "../../types/data";
import { TodoItem } from "../TodoItem";

interface ITodoListProps {
  items: ITodo[];
  toggleTodo: (id: number) => void;
}

export const TodoList: React.FC<ITodoListProps> = ({ items, toggleTodo }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>DESCRIPTION</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {items.map((todo, i) => {
          return (
            <TodoItem key={todo.id} i={i} {...todo} toggleTodo={toggleTodo} />
          );
        })}
      </tbody>
    </table>
  );
};
