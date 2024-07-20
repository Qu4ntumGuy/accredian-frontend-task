import React from "react";
import round from "../Assets/getintouch.svg";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

function FAQs() {
  return (
    <>
      <div className="max-w-7xl mx-auto my-5">
        <div className="text-[27.66px] pt-32 flex justify-center items-center align-middle font-semibold">
          Frequnetly Asked{" "}
          <span className="text-[#1A73E8] ml-2">Questions</span>
        </div>
        <div className="flex w-full my-20 justify-between">
          <div className="flex flex-col w-64 font-semibold">
            <button className="w-full hover:bg-[#1A73E8] hover:text-white text-[#1A73E8] shadow-xl border rounded-lg h-16">
              Eligibility
            </button>
            <button className="w-full hover:bg-stone-300 border-2 text-stone-500 border-stone-500 my-5 rounded-lg h-16">
              How To Use?
            </button>
            <button className="w-full hover:bg-stone-300 border-2 text-stone-500 border-stone-500 rounded-lg h-16">
              terms & Conditions
            </button>
          </div>
          <div className=" w-[70%]">
            <div className="flex justify-start items-center text-[#1A73E8] text-base h-16 font-semibold">
              Do I need to have prior Product Management and Project Management
              experience to enroll in the program?
              <span>
                <KeyboardArrowUpRoundedIcon className="text-black ml-5" />
              </span>
            </div>
            <div>
              <div>
                No, the program is designed to be inclusive of all levels of
                experience. All topics will be covered from the basics, making
                it suitable for individuals from any field of work.
              </div>
              <div className="my-10 text-base font-semibold">
                What is the minimum system configuration required?
                <span className="ml-5">
                  <KeyboardArrowDownRoundedIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[85rem] mx-auto my-10 py-20">
        <div className="bg-[#1A73E8] h-52 w-full rounded-2xl">
          <img src={round} alt="round" className="w-full" />
        </div>
      </div>
    </>
  );
}

export default FAQs;
