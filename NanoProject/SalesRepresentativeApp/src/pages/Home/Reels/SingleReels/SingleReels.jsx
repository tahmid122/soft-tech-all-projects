import React from "react";

const SingleReels = ({ setIsOpen, setReelImage }) => {
  return (
    //this information should be dynamic
    <div
      onClick={() => {
        setIsOpen(true);
        // this img source should be dynamic
        setReelImage(
          "https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww"
        );
      }}
    >
      <div id="singleReels">
        <div className="reelsImage">
          <img
            src="https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww"
            alt="reelsTitle"
          />
        </div>
        <p className="reelsTitle">Nano Tech</p>
      </div>
    </div>
  );
};

export default SingleReels;
