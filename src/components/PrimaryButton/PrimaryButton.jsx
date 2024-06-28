import React from "react";
import "./PrimaryButton.scss";

function PrimaryButton(props) {
  // {
  //   buttonExtraClass,
  //   onClick,
  //   //   iconExtraClass,
  //   //   iconSrc,
  //   //   iconAlt,
  //   buttonText,
  //   textClass,

  // }
  // )
  //   const { buttonExtraClass, onClick, textClass, buttonText } = props;
  return (
    <>
      <button
        className={`primary-button ${props.buttonExtraClass}`}
        // className="primary-button"
        onClick={props.onClick}
      >
        {/* <img
          className={`primary-button__icon ${iconExtraClass}`}
          src={iconSrc}
          alt={iconAlt}
        /> */}
        {props.children}
        <p
          className="primary-button__text"
          // className={props.textClass}
        >
          {props.buttonText}
        </p>
      </button>
    </>
  );
}

export default PrimaryButton;
