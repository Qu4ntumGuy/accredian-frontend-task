import React from "react";

function InputForm() {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="w-full">
        <div className="flex w-full space-x-5 my-5">
          <div className="w-full">
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border outline-none border-gray-300 focus:border-blue-600 p-2 rounded-md"
            />
          </div>
          <div className="w-full">
            <label htmlFor="name">Email*</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>
        </div>
        <div className="flex w-full space-x-5 my-5">
          <div className="w-full">
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-400 p-2 rounded"
            />
          </div>
          <div className="w-full">
            <label htmlFor="name">Email*</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-400 p-2 rounded"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default InputForm;
