import React from "react";
import Modal from "../Components/Modal";

import Footer from "../Components/Footer";
import FAQs from "../Components/FAQs";
import Benefits from "../Components/Benefits";
import Refer from "../Components/Refer";
import Poster from "../Components/Poster";

function Home() {
  const [showModal, setShowModal] = React.useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="text-[#1A202C] overflow-hidden">
      <div className="w-full font-semibold bg-blue-100 h-16 flex justify-center items-center">
        <span>Navigate your ideal career path with tailored expert advice</span>
        <span className="text-[#1A73E8] ml-5">Contact Expert</span>
      </div>
      <section className="max-w-[85rem] mx-auto h-[100vh]">
        <Poster />
      </section>
      <section className=" bg-[#EEF5FF] w-full">
        <Refer />
      </section>
      <section className="h-screen w-full">
        <Benefits />
      </section>
      <section className="w-full h-screen">
        <FAQs />
      </section>
      <section className="w-full bg-[#282828] ">
        <Footer />
      </section>
      <Modal show={showModal} handle={handleModal} />
      <button onClick={handleModal}>Show Modal</button>
    </div>
  );
}

export default Home;
