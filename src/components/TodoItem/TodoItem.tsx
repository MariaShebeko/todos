import { useState, memo } from "react";
import { ITodo } from "../../types/data";
import { Modal } from "../Modal";
import "./TodoItem.css";

interface TodoItemProps {
  item: ITodo;
}

const hasTodoNotModified = (prev: TodoItemProps, next: TodoItemProps) => {
  return prev.item.isCompleted === next.item.isCompleted;
};

export const TodoItem: React.FC<TodoItemProps> = memo(({ item }) => {
  console.log("ITEM RENDER " + item.id);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const { id, title, description } = item;

  return (
    <>
      <tr key={id} className="table-row">
        <td onClick={toggleModal}>{id}.</td>
        <td onClick={toggleModal}>{title}</td>
        <td onClick={toggleModal}>{description}</td>
        <td>
          <input type="checkbox" data-id={id} />
        </td>
      </tr>
      {showModal && (
        <Modal onClose={toggleModal}>
          {/* <TodoCard
            id={id}
            title={title}
            description={description}
            isCompleted={isCompleted}
            onClose={toggleModal}
          /> */}
          some stuff with todo
        </Modal>
      )}
    </>
  );
}, hasTodoNotModified);
