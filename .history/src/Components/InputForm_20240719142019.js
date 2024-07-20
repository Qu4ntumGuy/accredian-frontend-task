import React from "react";
import Dropdown from "./Dropdown";

const options = [
  { value: "ML", label: "Machine Learning" },
  { value: "AI", label: "Artificial Intelligence" },
  { value: "DS", label: "Data Science" },
  { value: "MERN", label: "Full Stack Development(MERN)" },
];
function InputForm() {
  const [selectedOption, setSelectedOption] = React.useState(
    options[0] || null
  );

  const formdata = {
    name: "",
    email: "",
    phone: "",
    course: "",
    reason: "",
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const handleSelect = (value) => {
    console.log(value);
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="w-full">
        <div className="xl:flex w-full xl:space-x-5 my-5">
          <div className="w-full">
            <label htmlFor="name" className="font-semibold">
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border outline-none border-gray-400 focus:border-blue-600 p-2 rounded-md"
            />
          </div>
          <div className="w-full my-3 xl:my-0">
            <label htmlFor="email" className="font-semibold">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-400 focus:border-blue-600 outline-none p-2 rounded-md"
            />
          </div>
        </div>
        <div className="xl:flex w-full xl:space-x-5 my-5">
          <div className="w-full">
            <label htmlFor="phone" className="font-semibold">
              Phone Number*
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full border border-gray-400 focus:border-blue-600 outline-none p-2 rounded-md"
            />
          </div>

          <div className="w-full my-3 xl:my-0">
            <label htmlFor="note" className="font-semibold">
              Refered by*
            </label>
            <input
              type="text"
              id="note"
              name="note"
              className="w-full border border-gray-400 focus:border-blue-600 outline-none p-2 rounded-md"
            />
          </div>
        </div>
        <div className="xl:flex w-full xl:space-x-5 my-5">
          <div className="w-full">
            <label htmlFor="course" className="font-semibold">
              Course*
            </label>
            <Dropdown options={options} onSelect={handleSelect} />
          </div>
          <div className="w-full my-3 xl:my-0">
            <label htmlFor="reason" className="font-semibold">
              Reason*
            </label>
            <input
              type="text"
              id="reason"
              name="reason"
              className="w-full border border-gray-400 focus:border-blue-600 outline-none p-2 rounded-md"
            />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <button className="bg-[#1a73e8] hover:bg-blue-600 p-3 w-32 rounded-md text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputForm;
