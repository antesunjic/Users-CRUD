import React from "react";
import "./Input.css";

const styles = ["input", "inputModal"];

const Input = ({ type = "text", onChange, value, placeholder, inputStyle }) => {
  const checkInputStyle = styles.includes(inputStyle) ? inputStyle : styles[0];
  return (
    <div>
      <input
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={`btn ${checkInputStyle}`}
      />
    </div>
  );
};

export default Input;
