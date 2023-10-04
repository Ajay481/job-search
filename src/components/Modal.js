import React from "react";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-20 backdrop-blur-xl"
      onClick={props.onClose}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-[20%] left-[5%] w-[90%] bg-white p-4 border-r-4 z-30 shadow-slate-800 transition duration-300 ease-out">
      {props.children}
    </div>
  );
};

export const Modal = (props) => {
  const parentElement = document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        parentElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        parentElement
      )}
    </>
  );
};
