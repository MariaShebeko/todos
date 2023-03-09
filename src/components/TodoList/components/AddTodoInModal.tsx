import { ITodo } from "types/data";
import { Modal } from "components/Modal";
import { CreateTodoForm } from "components/CreateTodoForm";
import React, { useState } from "react";

interface IProps {
  addTodo: (todo: ITodo) => void;
}

export const AddTodoInModal: React.FC<IProps> = ({ addTodo }) => {
  const [isOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  const addTodoCallback = (todo: ITodo) => {
    addTodo(todo);
    toggleModal();
  };

  return (
    <>
      {isOpen && (
        <Modal onClose={toggleModal}>
          <CreateTodoForm
            addTodo={addTodoCallback}
            cancelButtonActive={true}
            onClose={toggleModal}
          />
        </Modal>
      )}
      <button type="button" className="button" onClick={toggleModal}>
        Add todo
      </button>
    </>
  );
};
