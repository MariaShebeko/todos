import { Modal } from "components/Modal";
import { CreateTodoForm } from "components/CreateTodoForm";
import React, { useState } from "react";

export const AddTodoInModal: React.FC = () => {
  const [isOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      {isOpen && (
        <Modal onClose={toggleModal}>
          <CreateTodoForm cancelButtonActive={true} onClose={toggleModal} />
        </Modal>
      )}
      <button type="button" className="button" onClick={toggleModal}>
        Add todo
      </button>
    </>
  );
};
