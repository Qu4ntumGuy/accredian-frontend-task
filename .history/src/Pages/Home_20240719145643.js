import React from "react";
import Modal from "../Components/Modal";
import logo from "../Assets/logo.png.svg";

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
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="flex">
            <div>Refer & Earn</div>
            <div>Resources</div>
            <div>About Us</div>
            <button>Login</button>
            <button>Try for free</button>
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
