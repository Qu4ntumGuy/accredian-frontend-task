import React from "react";
import Modal from "../Components/Modal";

function Home() {
  return (
    <div>
      Landing Page
      <Modal show={showModal} handle={handleModal} />
      <button onClick={handleModal}>Show Modal</button>
    </div>
  );
}

export default Home;
