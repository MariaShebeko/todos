import { useState } from "react";
import { ITodo } from "../../types/data";
import { Modal } from "../Modal";
import { TodoCard } from "../TodoCard";
import "./TodoItem.css";

interface ITodoItem extends ITodo {
  i: number;
  toggleTodo: (id: number) => void;
}

export const TodoItem: React.FC<ITodoItem> = ({
  id,
  title,
  description,
  isCompleted,
  i,
  toggleTodo,
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <tr key={id} className="table-row">
        <td onClick={toggleModal}>{i + 1}.</td>
        <td onClick={toggleModal}>{title}</td>
        <td onClick={toggleModal}>{description}</td>
        <td>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => toggleTodo(id)}
          />
        </td>
      </tr>
      {showModal && (
        <Modal onClose={toggleModal}>
          <TodoCard
            id={id}
            title={title}
            description={description}
            isCompleted={isCompleted}
            toggleTodo={toggleTodo}
            onClose={toggleModal}
          />
        </Modal>
      )}
    </>
  );
};
