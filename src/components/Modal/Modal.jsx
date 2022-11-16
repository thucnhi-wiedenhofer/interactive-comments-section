import React from "react";
import "./modal.css";

function Modal() {
  return (
    <>
      <div className="delete-modal">
        <h1>Delete comment</h1>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="modal-btn">
          <button className="cancel-button">No, cancel</button>
          <button className="delete-button">Yes, Delete</button>
        </div>
      </div>

      <div className="modal-overlay"></div>
    </>
  );
}

export default Modal;
