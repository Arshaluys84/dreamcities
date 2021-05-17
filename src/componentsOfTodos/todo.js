import { useState } from "react";
import { Backdrop } from "./backdrop";
import { Modal } from "./modal";

export const Todo = ({ title }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const deleteHandler = () => {
    console.log("clicked", title);
    setModalIsOpen(true);
  };
  const cancelHandler = () => {
    console.log("clicked", title);
    setModalIsOpen(false);
  };
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onClick={cancelHandler} />}
      {modalIsOpen && <Backdrop onClick={cancelHandler} />}
    </div>
  );
};
