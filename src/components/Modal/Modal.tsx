import React, { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

interface ModalType {
  children?: ReactNode;
  onClose: () => void;
}

const modalRoot: any = document.querySelector("#modal-root");

export const Modal = ({ children, onClose }: ModalType) => {
  useEffect(() => {
    const handleKeyDown = (evt: KeyboardEvent) => {
      if (evt.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return createPortal(
    <div className={s.modalOverlay}>
      <div className={s.modalBox}>{children}</div>
    </div>,
    modalRoot
  );
};
