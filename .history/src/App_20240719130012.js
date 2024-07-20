import React from "react";
import Modal from "./Components/Modal";

function App() {
  const [showModal, setShowModal] = React.useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      Main app
      <Modal show={showModal} handle={handleModal} />
      <button onClick={handleModal}>Show Modal</button>
    </div>
  );
}

export default App;
