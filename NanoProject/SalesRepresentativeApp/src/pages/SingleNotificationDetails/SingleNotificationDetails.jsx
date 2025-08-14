import React from "react";
import "./singleNotificationDetails.css";
const SingleNotificationDetails = () => {
  return (
    // this details should be dynamic
    <div id="singlePost" className="marginBottom mainContainer">
      <div className="postTop marginBottom">
        <div className="ptImage">
          <img src="/logo.png" alt="post company image" />
        </div>
        <div className="ptDes">
          <p>12/12/2012 | 12:45</p>
          <h4>Welcome to nanoTech lorem</h4>
        </div>
      </div>
      <div className="postDetails marginBottom">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          similique repellat laudantium amet illum! Consequatur sint quidem,
          culpa, reprehenderit expedita consectetur voluptatibus tenetur labore
          earum, sequi perferendis similique hic dicta!
        </p>
      </div>
      {/* <div className="postMedia"></div> */}
    </div>
  );
};

export default SingleNotificationDetails;
