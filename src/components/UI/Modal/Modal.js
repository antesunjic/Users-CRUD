import React from "react";
import Backdrop from "../UI/Backdrop/Backdrop";

import "./Modal.css";

const Modal = ({ show, children, closed }) => {
  let backdrop = show ? (
    <div>
      <Backdrop show={show} clicked={closed} />
      <div className="Modal">{children}</div>
    </div>
  ) : null;
  return backdrop;
};

export default Modal;
