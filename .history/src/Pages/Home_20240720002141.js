import React from "react";
import Modal from "../Components/Modal";
import logo from "../Assets/logo.png.svg";
import pic from "../Assets/pic.svg";
import dollar from "../Assets/dollar.svg";
import dollar1 from "../Assets/dollar-sq.svg";
import referral from "../Assets/referral-2.svg";
import addFriend from "../Assets/add_friend.svg";
import reward from "../Assets/Layer_10.svg";
import bonus from "../Assets/bonus.svg";
import toggle from "../Assets/toggle.svg";
import schollar from "../Assets/schollar.svg";
import round from "../Assets/getintouch.svg";
import accredian from "../Assets/accredain.svg";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

function Home() {
  const [showModal, setShowModal] = React.useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="text-[#1A202C]">
      <div className="w-full font-semibold bg-blue-100 h-16 flex justify-center items-center">
        <span>Navigate your ideal career path with tailored expert advice</span>
        <span className="text-[#1A73E8] ml-5">Contact Expert</span>
      </div>
      <section className="max-w-[85rem] mx-auto h-[100vh]">
        <div className="h-[80px] items-center flex justify-between">
          <div className="flex space-x-5">
            <img src={logo} alt="logo" />
            <button className="bg-[#1A73E8] rounded-md text-sm p-2 w-28 text-white">
              Courses{" "}
              <span>
                <KeyboardArrowDownRoundedIcon />
              </span>
            </button>
          </div>
          <div className="flex space-x-5 font-semibold text-sm">
            <div className="p-2 cursor-pointer">Refer & Earn</div>
            <div className="p-2 cursor-pointer">Resources</div>
            <div className="p-2 cursor-pointer">About Us</div>

            <button className="bg-gray-400 hover:bg-gray-300 w-20 bg-opacity-30 p-2 text-center rounded-md">
              Login
            </button>
            <button className="bg-[#1A73E8] hover:bg-blue-600 w-28 text-white p-2 text-center rounded-md">
              Try for free
            </button>
          </div>
        </div>
        <div>
          <div className="flex w-full justify-center items-center">
            <div className="flex text-2xl bg-[#1A73E8] bg-opacity-15 mt-7 p-3 rounded-full justify-between items-center w-1/2 h-14">
              <div className="text-[#1A73E8]  w-full text-center cursor-default flex flex-col">
                Refer
              </div>
              <div className="w-full text-gray-700 text-center cursor-pointer">
                Benefits
              </div>
              <div className="w-full text-gray-700 text-center cursor-pointer">
                FAQs
              </div>
              <div className="w-full text-center text-gray-700 cursor-pointer">
                Support
              </div>
            </div>
          </div>
          <div className="w-full relative justify-start flex mt-5 h-[692px] shadow-2xl rounded-2xl border-y-2">
            <div className="h-full w-[502px] flex flex-col justify-center py-16 pl-12 pt-32">
              <div className=" text-[80px] font-bold">
                <div>Let's Learn</div>
                <div className=" -mt-10">& Earn</div>
              </div>
              <div className="text-4xl my-16">
                <div>Get a chance to win</div>
                <div className="my-3">
                  up-to
                  <span className="text-[#1A73E8] text-5xl ml-2 font-bold">
                    Rs. 15,000
                  </span>
                </div>
              </div>
              <div>
                <button className="bg-[#1A73E8] text-lg w-48 p-3 text-white rounded-md">
                  Refer Now
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={dollar1}
                alt="pic"
                className=" absolute rotate-180 bottom-10 left-10"
              />
              <img
                src={dollar1}
                alt="pic"
                className=" absolute right-0 top-60 -z-10"
              />
              <img
                src={dollar1}
                alt="pic"
                className=" absolute transform scale-y-[-1] rotate-180 top-0 left-52 -z-10"
              />
              <img
                src={dollar}
                alt="pic"
                className=" absolute transform scale-y-[-1] rotate-180 top-0 right-0"
              />
              <img src={pic} alt="pic" className="mr-5" />
            </div>
            <div>
              <img src={dollar} alt="pic" className=" absolute top-0 left-0" />
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-[#EEF5FF] w-full">
        {/* How Do I Refer? */}

        <div className=" max-w-[85rem] mx-auto">
          <div className=" text-[27.6px] py-10 flex justify-center items-center align-middle font-semibold">
            How Do I <span className="text-[#1A73E8] ml-2">Refer?</span>
          </div>
          <div className="relative py-5 flex text-base font-medium">
            <div className=" absolute flex flex-col items-center justify-center top-40 left-48 w-48">
              <div className="w-full flex justify-center">
                <img src={addFriend} alt="add friend" className="mb-5" />
              </div>
              <p className="w-full  text-center">
                Submit referrals easily via our website’s referral section.
              </p>
            </div>
            <div className=" absolute flex flex-col items-center justify-center top-40 left-[43%] w-48">
              <div className="w-full flex justify-center">
                <img src={reward} alt="reward" className="mb-5" />
              </div>
              <p className="w-full text-center">
                Earn rewards once your referral joins an Accredian program.
              </p>
            </div>
            <div className=" absolute flex flex-col items-center justify-center top-40 right-48 w-48">
              <div className="w-full flex justify-center">
                <img src={bonus} alt="bonus" className="mb-5" />
              </div>
              <p className="w-full text-center">
                Both parties receive a bonus 30 days after program enrollment.
              </p>
            </div>
            <img src={referral} alt="referral" className="" />
          </div>
          <div className="w-full py-10 flex justify-center">
            <button className="w-56 bg-[#1A73E8] hover:bg-blue-600 h-16 rounded-lg text-white">
              Refer Now
            </button>
          </div>
        </div>
      </section>
      <section className="h-screen w-full">
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
              <button className="w-56 my-5 bg-[#1A73E8] hover:bg-blue-600 h-16 rounded-lg text-white">
                Refer Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-screen">
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
                Do I need to have prior Product Management and Project
                Management experience to enroll in the program?
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
      </section>
      <section className="w-full bg-[#282828] ">
        <div className="max-w-6xl mx-auto">
          <div className="py-8">
            <div className="flex border-b-2 border-gray-500 justify-between">
              <div className="w-36">
                <img src={accredian} alt="accredian" className="" />
              </div>
              <div className="px-20 pb-5 flex flex-col items-center">
                <div className="text-white text-sm font-medium border p-2 w-64 rounded-lg text-center bg-[#1A73E8]">
                  Schedule 1-on-1 Call Now
                </div>
                <div className="text-white text-sm font-light">
                  Speak with our Learning Advisor
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="p-2 pt-5">
              <div>Programs</div>
              <div>Programs</div>
              <div>Programs</div>
              <div>Programs</div>
              <div>Programs</div>
              <div>Programs</div>
              <div>Programs</div>
              <div>Programs</div>
              <div>Programs</div>
              <div>Programs</div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
      {/* <Modal show={showModal} handle={handleModal} />
      <button onClick={handleModal}>Show Modal</button> */}
    </div>
  );
}

export default Home;
