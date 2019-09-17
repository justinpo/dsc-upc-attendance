import React from "react";
import "./styles.scss";

const Card = ({ children, className, label }) => (
  <div className={`Card ${className}`}>
    <h3 className="Card_label">{label}</h3>
    {children}
  </div>
);

export default Card;
