import React from "react";
import "./DeleteButton.scss";

function DeleteButton({ buttonText, onClick }) {
  return (
    <>
      <button className="delete-button" onClick={onClick}>
        <p>{buttonText}</p>
      </button>
    </>
  );
}

export default DeleteButton;
