import React from "react";
import Modal from "../Components/Modal";
import logo from "../Assets/logo.png.svg";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import pic from "../Assets/pic.svg";
import dollar from "../Assets/dollar.svg";
import dollar1 from "../Assets/dollar-sq.svg";

function Home() {
  const [showModal, setShowModal] = React.useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="">
      <div className="w-full top-0 font-semibold sticky bg-blue-100 h-16 flex justify-center items-center">
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
          <div className="flex space-x-5 my-4 font-semibold text-sm">
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
            <div className="flex text-2xl bg-[#1A73E8] bg-opacity-15 p-3 rounded-full justify-between items-center w-1/2 h-14">
              <div className="text-[#1A73E8] w-full text-center flex flex-col">
                Refer<span className="inline-block">.</span>
              </div>
              <div className="w-full text-center">Refer</div>
              <div className="w-full text-center">Refer</div>
              <div className="w-full text-center">Refer</div>
            </div>
          </div>
          <div className="w-full relative justify-start flex mt-5 h-[692px] shadow-2xl rounded-2xl border-y-2">
            <div className="h-full w-[502px] flex flex-col justify-center py-16 pl-12 pt-32">
              <div className="text-7xl font-bold">
                <div>Let's Learn</div>
                <div>& Earn</div>
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
                <button className="bg-[#1A73E8] text-lg w-48 p-2 text-white rounded-md">
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
      <section className="h-[100vh] bg-stone-400"></section>
      {/* <Modal show={showModal} handle={handleModal} />
      <button onClick={handleModal}>Show Modal</button> */}
    </div>
  );
}

export default Home;
