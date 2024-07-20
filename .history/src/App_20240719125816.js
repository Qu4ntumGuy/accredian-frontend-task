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
      <Modal />
    </div>
  );
}

export default App;
