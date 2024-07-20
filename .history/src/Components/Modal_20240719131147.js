// Modal.js
import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ show, handle }) => {
  return (
    <div onClick={handle} className={styles.overlay}>
      <div className=" absolute bg-white rounded-lg p-6 z-20 w-11/12 md:w-1/2">
        <button className="float-right text-xl font-bold" onClick={handle}>
          &times;
          <div>This is submission Form</div>
        </button>
      </div>
    </div>
  );
};

export default Modal;
