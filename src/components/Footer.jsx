import React from "react";

export default function Footer(props) {
  const { showModal, handleToggleModal, data } = props;
  return (
    <footer>
      <div className="bgGradient">
        <div>
          <h2>{data?.title}</h2>
          <h1>{data?.date}</h1>
        </div>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
