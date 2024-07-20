import React from "react";
import Dropdown from "./Dropdown";
import axios from "axios";

const options = [
  { value: "product-management", label: "Product Management" },
  { value: "strategy-leadership", label: "Strategy & Leadership" },
  { value: "business-management", label: "Business Management" },
  { value: "fintech", label: "Fintech" },
  { value: "senior-management", label: "Senior Management" },
  { value: "data-science", label: "Data Science" },
  { value: "digital-transformation", label: "Digital Transformation" },
  { value: "business-analytics", label: "Business Analytics" },
];

const url = process.env.REACT_APP_SERVER_URL;

function InputForm() {
  const [formdata, setFormdata] = React.useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    reason: "",
    note: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/createReferral`, {
        name: formdata.name,
        email: formdata.email,
        phone: formdata.phone,
        course: formdata.course,
        reason: formdata.reason,
        note: formdata.note,
      });
      console.log(res);
    } catch (error) {
      console.log(error?.response?.data?.error);
    }
  };

  const handleSelect = (value) => {
    console.log(value);
    setFormdata({ ...formdata, course: value });
  };

  return (
    <div>
      <form className="w-full">
        <div className="xl:flex w-full xl:space-x-5 my-5">
          <div className="w-full">
            <label htmlFor="name" className="font-semibold">
              Name*
            </label>
            <input
              onChange={(e) =>
                setFormdata({ ...formdata, name: e.target.value })
              }
              value={formdata.name}
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
              onChange={(e) =>
                setFormdata({ ...formdata, email: e.target.value })
              }
              value={formdata.email}
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
              onChange={(e) =>
                setFormdata({ ...formdata, phone: e.target.value })
              }
              value={formdata.phone}
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
              onChange={(e) =>
                setFormdata({ ...formdata, note: e.target.value })
              }
              value={formdata.note}
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
              onChange={(e) =>
                setFormdata({ ...formdata, reason: e.target.value })
              }
              value={formdata.reason}
              type="text"
              id="reason"
              name="reason"
              className="w-full border border-gray-400 focus:border-blue-600 outline-none p-2 rounded-md"
            />
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="border-red-500 border p-2 text-red-500 rounded-lg"></div>
          <button
            onClick={submitHandler}
            className="bg-[#1a73e8] hover:bg-blue-600 p-3 w-32 rounded-md text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputForm;
