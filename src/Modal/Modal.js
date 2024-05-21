import React from "react";
import { ReactComponent as Cross } from "../img/cross.svg";
import "../mainElement/Main.css";

function Modal({
  active,
  setActive,
  activeModal,
  setActiveModal,
  contentActiveModal,
  setContentActiveModal,
  content,
}) {
  return (
    <div
      onClick={() => setActive(false)}
      className={active ? activeModal : setActiveModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={active ? contentActiveModal : setContentActiveModal}
      >
        {content}
        <Cross className="Cross_svg" onClick={() => setActive(false)} />
      </div>
    </div>
  );
}
export default Modal;
