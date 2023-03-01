import { ITodo } from "../../types/data";
import s from "./TodoCard.module.css";

interface ITodoCard extends ITodo {
  toggleTodo: (id: number) => void;
  onClose: () => void;
}

export const TodoCard: React.FC<ITodoCard> = ({
  id,
  title,
  description,
  isCompleted,
  toggleTodo,
  onClose,
}) => {
  return (
    <div className={s.cardWrapper}>
      <h1 className={s.title}>{title}</h1>
      <h3>Description:</h3>
      <p>{description}</p>
      <div className={s.statusWrapper}>
        <span className={s.status}>Status:</span>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => toggleTodo(id)}
        />
      </div>
      <button type="button" onClick={onClose} className={s.button}>
        Close
      </button>
    </div>
  );
};
