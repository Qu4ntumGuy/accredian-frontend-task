import React from "react";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import toggle from "../Assets/toggle.svg";
import schollar from "../Assets/schollar.svg";

function Benefits() {
  const [showModal, setShowModal] = React.useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="max-w-[77rem] my-5 mx-auto">
      <div className="text-[27.66px] pt-16 flex justify-center items-center align-middle font-semibold">
        What Are The{" "}
        <span className="text-[#1A73E8] ml-2">Referral Benefits?</span>
      </div>
      <div className="my-10 text-lg">
        <div className="flex space-x-3 justify-end">
          <p>Enrolled</p>
          <img src={toggle} alt="pic" className="" />
        </div>
        <div className="flex justify-between h-auto my-4">
          <div className=" shadow-2xl w-72 text-base text-[#3C4852] font-semibold rounded-xl">
            <div className="h-12 px-4 bg-[#1A73E8] w-full rounded-t-md flex justify-start items-center text-white ">
              ALL PROGRAMS{" "}
              <span className="left-0 ml-auto">
                <ArrowForwardIosRoundedIcon />
              </span>
            </div>
            <div className="h-16 w-full px-4">
              <div className="h-full flex items-center border-b border-gray-400">
                <div>PRODUCT MANAGEMENT</div>
                <div className="left-0 ml-auto">
                  <KeyboardArrowRightRoundedIcon />
                </div>
              </div>
            </div>
            <div className="h-16 w-full px-4">
              <div className="h-full flex items-center border-b border-gray-400">
                <div>STRATEGY & LEADERSHIP</div>
                <div className="left-0 ml-auto">
                  <KeyboardArrowRightRoundedIcon />
                </div>
              </div>
            </div>{" "}
            <div className="h-16 w-full px-4">
              <div className="h-full flex items-center border-b border-gray-400">
                <div>BUSINESS MANAGEMENT</div>
                <div className="left-0 ml-auto">
                  <KeyboardArrowRightRoundedIcon />
                </div>
              </div>
            </div>{" "}
            <div className="h-16 w-full px-4">
              <div className="h-full flex items-center border-b border-gray-400">
                <div>FINTECH</div>
                <div className="left-0 ml-auto">
                  <KeyboardArrowRightRoundedIcon />
                </div>
              </div>
            </div>{" "}
            <div className="h-16 w-full px-4">
              <div className="h-full flex items-center border-b border-gray-400">
                <div>SENIOR MENAGEMENT</div>
                <div className="left-0 ml-auto">
                  <KeyboardArrowRightRoundedIcon />
                </div>
              </div>
            </div>{" "}
            <div className="h-16 w-full px-4">
              <div className="h-full flex items-center border-b border-gray-400">
                <div>DATA SCIENCE</div>
                <div className="left-0 ml-auto">
                  <KeyboardArrowRightRoundedIcon />
                </div>
              </div>
            </div>{" "}
            <div className="h-16 w-full px-4">
              <div className="h-full flex items-center border-b border-gray-400">
                <div>DIGITAL TRANSFORMATION</div>
                <div className="left-0 ml-auto">
                  <KeyboardArrowRightRoundedIcon />
                </div>
              </div>
            </div>
            <div className="h-16 w-full px-4">
              <div className="h-full flex items-center">
                <div>BUSINESS ANALYTICS</div>
                <div className="left-0 ml-auto">
                  <KeyboardArrowRightRoundedIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-2xl ml-10 flex w-[920px] text-lg rounded-xl text-[#3C4852]">
            <div className="w-[58%] border-r-2 border-gray-400">
              <div className="text-[#1350A0] px-5 h-14 flex items-center rounded-ss-xl bg-[#1A73E8] bg-opacity-35 font-bold">
                Programs
              </div>
              <div className="flex flex-col px-7 pt-4 ">
                <div className="flex w-full py-3">
                  <div className="flex justify-start items-start pt-1">
                    <img src={schollar} alt="schollar" className="" />
                  </div>
                  <div className=" w-[80%] pl-4 leading-tight">
                    Professional Certificate Program in Product Management
                  </div>
                </div>
                <div className="flex w-full py-3">
                  <div className="flex justify-start items-start pt-1">
                    <img src={schollar} alt="schollar" className="" />
                  </div>
                  <div className=" w-[80%] pl-4 leading-tight">
                    PG Certificate Program in Strategic Product Management
                  </div>
                </div>
                <div className="flex w-full py-3">
                  <div className="flex justify-start items-start pt-1">
                    <img src={schollar} alt="schollar" className="" />
                  </div>
                  <div className=" w-[80%] pl-4 leading-tight">
                    Executive Program in Data Driven Product Management{" "}
                  </div>
                </div>
                <div className="flex w-full py-3">
                  <div className="flex justify-start items-start pt-1">
                    <img src={schollar} alt="schollar" className="" />
                  </div>
                  <div className=" w-[80%] pl-4 leading-tight">
                    Executive Program in Product Management and Digital
                    Transformation{" "}
                  </div>
                </div>
                <div className="flex w-full py-3">
                  <div className="flex justify-start items-start pt-1">
                    <img src={schollar} alt="schollar" className="" />
                  </div>
                  <div className=" w-[80%] pl-4 leading-tight">
                    Executive Program in Product Management{" "}
                  </div>
                </div>
                <div className="flex w-full py-3">
                  <div className="flex justify-start items-start pt-1">
                    <img src={schollar} alt="schollar" className="" />
                  </div>
                  <div className=" w-[80%] pl-4 leading-tight">
                    Advanced Certification in Product Management{" "}
                  </div>
                </div>
                <div className="flex w-full py-3">
                  <div className="flex justify-start items-start pt-1">
                    <img src={schollar} alt="schollar" className="" />
                  </div>
                  <div className=" w-[80%] pl-4 leading-tight">
                    Executive Program in Product Management and Project
                    Management{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[21%] border-r-2 border-gray-400">
              <div className="text-[#1350A0] px-5 h-14 flex items-center bg-[#1A73E8] bg-opacity-35 font-bold">
                Referrer Bonus
              </div>
              <div className="flex flex-col px-7 pt-3">
                <div className="h-[69px] flex items-center justify-center">
                  ₹ 7,000
                </div>
                <div className="h-[69px] flex items-center justify-center">
                  ₹ 9,000
                </div>
                <div className="h-[69px] flex items-center justify-center">
                  ₹ 10,000
                </div>
                <div className="h-[69px] flex items-center justify-center">
                  ₹ 10,000
                </div>
                <div className="h-[69px] flex items-center justify-center">
                  ₹ 10,000
                </div>
                <div className="h-[69px] flex items-center justify-center">
                  ₹ 10,000
                </div>
                <div className="h-[69px] flex items-center justify-center">
                  ₹ 10,000
                </div>
              </div>
            </div>
            <div className="w-[21%]">
              <div className="text-[#1350A0] px-5 h-14 flex items-center rounded-se-xl bg-[#1A73E8] bg-opacity-35 font-bold">
                Referree Bonus
              </div>
              <div className="flex flex-col px-7 pt-3">
                <div className="h-[69px] flex items-center justify-center">
                  ₹ 9,000
                </div>
                <div className="h-[69px] flex items-center justify-center">
                  ₹ 11,000
                </div>
                <div className="h-[69px] flex items-center justify-center">
                  ₹ 10,000
                </div>
                <div className="h-[69px] flex items-center justify-center">
                  ₹ 10,000
                </div>
                <div className="h-[69px] flex items-center justify-center">
                  ₹ 10,000
                </div>
                <div className="h-[69px] flex items-center justify-center">
                  ₹ 10,000
                </div>
                <div className="h-[69px] flex items-center justify-center">
                  ₹ 10,000
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-3 flex justify-end text-base">
          <div className="flex justify-center items-center text border border-[#3C4852] font-bold text-[#3C4852] opacity-50 rounded-md p-2 w-44">
            <div className="pr-3">Show More</div>
            <KeyboardArrowDownRoundedIcon />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button
            onClick={handleModal}
            className="w-56 my-5 bg-[#1A73E8] hover:bg-blue-600 h-16 rounded-lg text-white"
          >
            Refer Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
