import React from "react";
import "./PrimaryButton.scss";

function PrimaryButton({ buttonText }) {
  return (
    <>
      <button className="primary-button">
        {buttonText}
      </button>
    </>
  );
}

export default PrimaryButton;
