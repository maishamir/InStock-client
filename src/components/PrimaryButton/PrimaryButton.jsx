import React from "react";
import "./PrimaryButton.scss";

function PrimaryButton({ buttonText }) {
  return (
    <>
      <button className="primary-button">
        <p>{buttonText}</p>
      </button>
    </>
  );
}

export default PrimaryButton;
