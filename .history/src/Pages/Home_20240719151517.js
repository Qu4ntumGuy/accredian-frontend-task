import React from "react";
import Modal from "../Components/Modal";
import logo from "../Assets/logo.png.svg";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

function Home() {
  const [showModal, setShowModal] = React.useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="max-w-[85rem] border-x-2 mx-auto">
      <section className="h-[100vh] bg-stone-100">
        <div className="w-full bg-[#1A73E8] bg-opacity-15 h-[60px] flex justify-center items-center">
          <span>
            Navigate your ideal career path with tailored expert advice
          </span>
          <span className="text-[#1A73E8] ml-5">Contact Expert</span>
        </div>
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
          <div className="flex space-x-5 text-sm">
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
          <div>
            <div>
              <div>Refer</div>
              <div>Benefits</div>
              <div>FAQs</div>
              <div>Support</div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <section className="h-[100vh] bg-stone-400"></section>
      {/* <Modal show={showModal} handle={handleModal} />
      <button onClick={handleModal}>Show Modal</button> */}
    </div>
  );
}

export default Home;
