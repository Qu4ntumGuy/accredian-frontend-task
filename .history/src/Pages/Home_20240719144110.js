import React from "react";
import Modal from "../Components/Modal";

function Home() {
  const [showModal, setShowModal] = React.useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="">
      <section className="h-[100vh] bg-stone-100">
        <div className="w-full bg-[#1A73E8] bg-opacity-15 h-[60px]">
          <span>
            Navigate your ideal career path with tailored expert advice
          </span>
          <span>Contact Expert</span>
        </div>
      </section>
      <section className="h-[100vh] bg-stone-400"></section>
      {/* <Modal show={showModal} handle={handleModal} />
      <button onClick={handleModal}>Show Modal</button> */}
    </div>
  );
}

export default Home;
