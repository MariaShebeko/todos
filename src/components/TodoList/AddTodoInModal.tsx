import { ITodo } from "../../types/data";
import { Modal } from "../Modal";
import { CreateTodoForm } from "../CreateTodoForm";
import React, { useState } from "react";

interface IProps {
  addTodo: (todo: ITodo) => void;
}

export const AddTodoInModal: React.FC<IProps> = ({ addTodo }) => {
  const [isOpen, setModalOpen] = useState(false);

  // useEffect(() => {
  //   console.log("mount modal form");
  //   return () => {
  //     console.log("unmount modal forms");
  //   };
  // }, []);

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
