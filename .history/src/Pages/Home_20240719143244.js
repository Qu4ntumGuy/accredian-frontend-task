import React from "react";
import Modal from "../Components/Modal";

function Home() {
  const [showModal, setShowModal] = React.useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      Landing Page
      <Modal show={showModal} handle={handleModal} />
      <button onClick={handleModal}>Show Modal</button>
    </div>
  );
}

export default Home;
