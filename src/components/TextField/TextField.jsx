import React from "react";
import "./TextField.scss";

function TextField({ label, name, placeholder, value, onChange , id }) {
  return (
    <div className="form-group">
      <label htmlFor="textField"> {label}</label>
      <input
        type="text"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="text-field"
      />
    </div>
  );
}

export default TextField;
