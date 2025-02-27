import React from "react";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="bgOverlay"></div>
      <div className="sideBarContent">
        <h2>Brutal Martian Landscape</h2>
        <div>
          <p> Description</p>
          <p>Lorempisum </p>
        </div>
        <button>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
