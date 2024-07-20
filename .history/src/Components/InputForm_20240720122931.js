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

  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const [isloading, setIsLoading] = React.useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;
    return phoneRegex.test(phoneNumber);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (
        !formdata.name ||
        !formdata.email ||
        !formdata.phone ||
        !formdata.course ||
        !formdata.reason ||
        !formdata.note
      ) {
        setError("All fields are required");
        return;
      }
      if (!validateEmail(formdata.email)) {
        setError("Invalid Email");
        return;
      }
      if (!validatePhoneNumber(formdata.phone)) {
        setError("Invalid Phone Number");
        return;
      }
      const res = await axios.post(`${url}/createReferral`, {
        name: formdata.name,
        email: formdata.email,
        phone: formdata.phone,
        course: formdata.course,
        reason: formdata.reason,
        note: formdata.note,
      });
      console.log(res);
      if (res.status === 201) {
        setFormdata({
          name: "",
          email: "",
          phone: "",
          course: "",
          reason: "",
          note: "",
        });
        setSuccess("Referral Form Submitted.");
      }
    } catch (error) {
      setError(error?.response?.data?.error);
      setFormdata({
        name: "",
        email: "",
        phone: "",
        course: "",
        reason: "",
        note: "",
      });
      console.log(error);
      console.log(error?.response?.data?.error);
    }
    // setError("");
    setIsLoading(false);
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
              required
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
              required
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
              required
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
              required
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
              required
              type="text"
              id="reason"
              name="reason"
              className="w-full border border-gray-400 focus:border-blue-600 outline-none p-2 rounded-md"
            />
          </div>
        </div>
        <div
          className={`w-full flex ${
            error ? " justify-between" : " justify-end"
          }`}
        >
          {error && (
            <div className="text-lg border-red-500 border p-2 cursor-default text-red-500 rounded-lg">
              {error}
              <span className="px-3 cursor-pointer">&times;</span>
            </div>
          )}
          {success && (
            <div className="text-lg border-green-500 border p-2 cursor-default text-green-500 rounded-lg">
              {success}
              <span className="">&times;</span>
            </div>
          )}
          <button
            onClick={submitHandler}
            className="bg-[#1a73e8] hover:bg-blue-600 p-3 w-32 rounded-md text-white"
          >
            {isloading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputForm;
