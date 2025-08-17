import React from "react";
import "./profile.css";
import { Link } from "react-router";
const Profile = () => {
  return (
    // profile
    <div id="profile" style={{ marginTop: "-15px" }} className="mainContainer">
      <div className="profileTop">
        <img
          className="coverImage"
          src="https://school.project.soft-techtechnology.com/images/banner2.jpg"
          alt="cover image"
        />
        <div className="profileDescription">
          <img
            className="profileDescriptionImage"
            src="https://i.ibb.co.com/zTL9ZmK8/362918150-181948424882166-2378319334321616290-n-1.jpg"
            alt="profileDescriptionImage"
          />
          <h2>Tahmid Alam</h2>
          <h3 style={{ color: "green" }}>Shop ID: 445</h3>
        </div>
      </div>
      <div className="profileMain">
        <div style={{ textAlign: "center" }}>
          <h1>Dashboard</h1>
          <Link
            style={{ display: "inline-block" }}
            to={"/salesReport"}
            className="btn"
          >
            Sales Report
          </Link>
        </div>
        <div className="detailsCards">
          {/* these data will fetch from database */}
          {/* single details card */}
          <div className="detailsCard">
            <h4>৫০০০০ টাকা</h4>
            <h3>মোট বিক্রয়</h3>
          </div>
          {/* single details card */}
          <div className="detailsCard">
            <h4>৪৫৭০ টাকা</h4>
            <h3>এ মাসে বিক্রয়</h3>
          </div>
          {/* single details card */}
          <div className="detailsCard">
            <h4>৭৪৫০ টাকা</h4>
            <h3>কিস্তি পাওনা</h3>
          </div>
          {/* single details card */}
          <div className="detailsCard">
            <h4>১২৪৫ টাকা</h4>
            <h3>কিস্তি আদায়</h3>
          </div>
          {/* single details card */}
          <div className="detailsCard">
            <h4>৭৫১২ টাকা</h4>
            <h3>লাভ</h3>
          </div>
          {/* single details card */}
          <div className="detailsCard">
            <h4>৬৩২১ পিস</h4>
            <h3>মোট পণ্য বিক্রয়</h3>
          </div>
          {/* single details card */}
          <div className="detailsCard">
            <h4>১২৫০০ পিস</h4>
            <h3>পণ্য স্টক</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
