import React from "react";
import { Link } from "react-router";

const SingleNotification = () => {
  return (
    // need to make link dynamic
    <Link to={"1"}>
      <div id="singleNotification" className="marginBottom">
        <img src="/logo.png" alt="logo" />
        <div className="notificationTitle">
          <div className="notificationTimeAndDate">12/12/2012 | 12:45</div>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            vel rerum molestiae dicta earum architecto
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default SingleNotification;
