import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const BackDrop = ({ toggle }) => {
  return (
    <div
      className="fixed top-0 left-0 z-20 w-full h-screen bg-black bg-opacity-75"
      onClick={toggle}
    />
  );
};

const ModalOverlay = ({ children }) => {
  return (
    <div
      className={`fixed top-[9vh] left-[50%] max-w-[40rem] w-[50%] bg-white p-4 rounded-lg shadow-lg z-30 animate-slide_down`}
    >
      {children}
    </div>
  );
};

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop toggle={toggleCartHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
