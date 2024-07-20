import React from "react";

function InputForm() {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div></div>
      </form>
    </div>
  );
}

export default InputForm;
