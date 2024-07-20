import React from "react";

function InputForm() {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="w-full">
        <div>
          <div>
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-400 p-2 rounded"
            />
          </div>
          <div>
            <label htmlFor="name">Name*</label>
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
