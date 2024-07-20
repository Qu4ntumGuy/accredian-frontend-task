import React from "react";
import Modal from "./Components/Modal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  const [showModal, setShowModal] = React.useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    // <div>
    //   Main app
    //   <Modal show={showModal} handle={handleModal} />
    //   <button onClick={handleModal}>Show Modal</button>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}
      </Routes>
    </Router>
  );
}

export default App;
