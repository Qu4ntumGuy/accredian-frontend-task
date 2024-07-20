// Modal.js
import React from "react";
import InputForm from "./InputForm";

const Modal = ({ show, handle }) => {
  return (
    <div
      onClick={handle}
      className={`fixed inset-0  w-full flex items-center justify-center ${
        show ? "block" : "hidden"
      }`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
    >
      <div className=" absolute bg-white rounded-lg p-6 w-11/12 md:w-1/2">
        <button className="float-right text-xl font-bold" onClick={handle}>
          &times;
          <InputForm />
        </button>
      </div>
    </div>
  );
};

export default Modal;
