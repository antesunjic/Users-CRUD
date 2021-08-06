import React from "react";
import "./Button.css";

const styles = [
  "btn--dark",
  "btn--approve",
  "btn--edit",
  "btn--danger",
  "btn--exit",
  "btn--upload",
];

const Button = ({
  label,
  children,
  onClick,
  buttonStyle,
  disabled,
  sumbitType,
}) => {
  const checkButtonStyle = styles.includes(buttonStyle)
    ? buttonStyle
    : styles[0];
  return (
    <button
      className={`btn ${checkButtonStyle}`}
      onClick={onClick}
      disabled={disabled}
      type={sumbitType ? "submit" : "button"}
    >
      {label}
      {children}
    </button>
  );
};

export default Button;
