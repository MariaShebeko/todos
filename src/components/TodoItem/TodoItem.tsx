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
  console.log("ITEM RENDER " + item._id);

  const { _id, title, description, isCompleted } = item;

  return (
    <>
      <tr key={_id} className="table-row" data-id={_id}>
        <td data-id={_id}>{_id}.</td>
        <td data-id={_id}>{title}</td>
        <td data-id={_id}>{description}</td>
        <td data-id={_id}>
          <input
            type="checkbox"
            data-id={_id}
            checked={isCompleted}
            // onChange={() => {}} // I dont know why, we can just have empty function!!!
          />
        </td>
        <td>
          <button type="button" data-id={_id}>
            delete
          </button>
        </td>
      </tr>
    </>
  );
}, hasTodoNotModified);
