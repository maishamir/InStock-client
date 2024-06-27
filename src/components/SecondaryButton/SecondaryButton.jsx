import React from "react";
import "./SecondaryButton.scss";

function SecondaryButton({ buttonText, onClick }) {
  return (
    <>
      <button className="secondary-button" onClick={onClick}>
        <p>{buttonText}</p>
      </button>
    </>
  );
}

export default SecondaryButton;
