import { memo } from "react";
import { ITodo } from "types/data";
import "./TodoItem.css";

interface ITodoItem {
  item: ITodo;
}

const hasTodoNotModified = (prev: ITodoItem, next: ITodoItem) => {
  return prev.item.isCompleted === next.item.isCompleted;
};

export const TodoItem: React.FC<ITodoItem> = memo(({ item }) => {
  console.log("ITEM RENDER " + item.id);

  const { id, title, description, isCompleted } = item;

  return (
    <>
      <tr key={id} className="table-row" data-id={id}>
        <td data-id={id}>{id}.</td>
        <td data-id={id}>{title}</td>
        <td data-id={id}>{description}</td>
        <td data-id={id}>
          <input
            type="checkbox"
            data-id={id}
            checked={isCompleted}
            onChange={() => {}} // I dont know why, we can just have empty function!!!
          />
        </td>
      </tr>
    </>
  );
}, hasTodoNotModified);
