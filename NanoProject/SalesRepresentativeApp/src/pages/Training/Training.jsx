import React, { useState } from "react";
import "./training.css";
import SingleTraining from "./SingleTraining";
const Training = () => {
  return (
    // video training
    <div className="mainContainer">
      {/* single training video */}
      <SingleTraining />
      <SingleTraining />
      <SingleTraining />
    </div>
  );
};

export default Training;
