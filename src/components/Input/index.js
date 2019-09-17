import React from "react";
import "./styles.scss";

const Input = ({ placeholder, className, defaultValue, onChange }) => (
  <div className={`Input_container ${className}`}>
    <input
      type="text"
      placeholder={placeholder}
      className="Input"
      defaultValue={defaultValue}
      onChange={onChange}
    />
    <span className="Input_underline"></span>
  </div>
);

export default Input;
