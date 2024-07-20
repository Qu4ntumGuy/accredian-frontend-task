import React from "react";
import Dropdown from "./Dropdown";

function InputForm() {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="w-full">
        <div className="flex w-full space-x-5 my-5">
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
          <div className="w-full">
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
        <div className="flex w-full space-x-5 my-5">
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

          <div className="w-full">
            <label htmlFor="course" className="font-semibold">
              Refered by*
            </label>
            <input
              type="text"
              id="course"
              name="course"
              className="w-full border border-gray-400 focus:border-blue-600 outline-none p-2 rounded-md"
            />
          </div>
        </div>
        <div className="flex w-full space-x-5 my-5">
          <div className="w-full">
            <label htmlFor="course" className="font-semibold">
              Course*
            </label>
            {/* <input
              type="text"
              id="course"
              name="course"
              className="w-full border border-gray-400 focus:border-blue-600 outline-none p-2 rounded-md"
            /> */}
            <Dropdown
              options={[
                { value: "domain", label: "Domain" },
                { value: "fileid", label: "File ID" },
                { value: "jsmonid", label: "JSMON ID" },
              ]}
              onSelect={handleSelect}
            />
          </div>
          <div className="w-full">
            <label htmlFor="phone" className="font-semibold">
              Reason*
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
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
