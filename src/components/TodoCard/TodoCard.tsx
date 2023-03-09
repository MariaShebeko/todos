import { ITodo } from "types/data";
import s from "./TodoCard.module.css";

interface ITodoCard {
  todo: ITodo;
  onClose: () => void;
  onCheckClick: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export const TodoCard: React.FC<ITodoCard> = ({
  todo,
  onClose,
  onCheckClick,
}) => {
  const { id, title, description, isCompleted } = todo;
  console.log("TODO: in todo card:", todo);
  return (
    <div className={s.cardWrapper} onClick={onCheckClick}>
      <h1 className={s.title}>{title}</h1>
      <h3>Description:</h3>
      <p>{description}</p>
      <div className={s.statusWrapper}>
        <span className={s.status}>Status:</span>
        <input type="checkbox" data-id={id} checked={isCompleted} />
      </div>
      <button type="button" onClick={onClose} className={s.button}>
        Close
      </button>
    </div>
  );
};
