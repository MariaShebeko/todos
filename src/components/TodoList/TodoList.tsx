import { ITodo, ITodoList } from "../../types/data";
import { TodoItem } from "../TodoItem";

interface ITodoListProps {
  items: ITodoList;
}

export const TodoList: React.FC<ITodoListProps> = ({ items }) => {
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
        {Object.values(items).map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              // toggleTodo={toggleTodo}
            />
          );
        })}
      </tbody>
    </table>
  );
};
