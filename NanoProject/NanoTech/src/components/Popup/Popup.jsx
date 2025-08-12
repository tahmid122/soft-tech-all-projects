import React, { useState } from "react";
import "./popup.css";
import { FaXmark } from "react-icons/fa6";
const Popup = ({ children, isOpen, setIsOpen, width, height }) => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    // popup reuseable component
    <div
      className="popupOverlay"
      onClick={() => setIsOpen(false)}
      style={{ display: `${isOpen ? "block" : "none"}` }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        id="popup"
        style={{ width: `${width}`, height: `${height}` }}
      >
        {/* close popup button */}
        <div style={{ textAlign: "right" }}>
          <FaXmark
            onClick={() => setIsOpen(false)}
            style={{ cursor: "pointer" }}
            size={20}
          />
        </div>
        {/* close popup button */}
        <div>{children}</div>
      </div>
    </div>
    // popup reuseable component
  );
};

export default Popup;
