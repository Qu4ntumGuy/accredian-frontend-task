// Modal.js
import React from "react";
import InputForm from "./InputForm";

const Modal = ({ show, handle }) => {
  return (
    <div className={`${show ? "block" : "hidden"}`}>
      <div
        onClick={handle}
        className={`fixed h-full inset-0 w-full flex items-center justify-center`}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      ></div>
      <div className="top-20 left-[5%] md:left-[20%] md:top-[20%] xl:left-[25%] xl:top-[30%] absolute bg-white rounded-lg p-6 w-11/12 md:w-1/2">
        <button
          className=" absolute right-5 top-0 p-2 text-xl font-bold"
          onClick={handle}
        >
          &times;
        </button>
        <InputForm />
      </div>
    </div>
  );
};

export default Modal;
