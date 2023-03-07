import React from "react";

interface IAddButton {
  onAddBtnClick: (event: React.FormEvent) => void;
}

export const AddButton = ({ onAddBtnClick }: IAddButton) => {
  return (
    <button type="submit" className="button" onClick={onAddBtnClick}>
      Create
    </button>
  );
};
