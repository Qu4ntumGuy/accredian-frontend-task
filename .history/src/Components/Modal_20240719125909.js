// Modal.js
import React from "react";

const Modal = ({ show, handle }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        show ? "block" : "hidden"
      }`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
    >
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2">
        <button className="float-right text-xl font-bold" onClick={handle}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
