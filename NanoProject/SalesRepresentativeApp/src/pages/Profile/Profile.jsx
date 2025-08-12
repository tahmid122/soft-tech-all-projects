import React from "react";
import "./profile.css";
const Profile = () => {
  return (
    // profile
    <div id="profile" style={{ marginTop: "-15px" }}>
      <div className="profileTop">
        <img
          className="coverImage"
          src="https://school.project.soft-techtechnology.com/images/banner2.jpg"
          alt="cover image"
        />
        <div className="profileDescription">
          <img
            className="profileDescriptionImage"
            src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/362918150_181948424882166_2378319334321616290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=H8EUuHGbJc4Q7kNvwFjyWlp&_nc_oc=AdnQgUQ0_WdfwsGUIWqdHThbZkrFUygqKoIO1T8SreLw8WiTNLdfgT_Vb2VMI6paOgo&_nc_zt=23&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=uw4iWiR0H-Sppev7Yms4qQ&oh=00_AfX716wPZus2hKe6nsmrlRkUR1JgyqM8PcbE2gVmBaGYow&oe=689CEBB4"
            alt="profileDescriptionImage"
          />
          <h2>Tahmid Alam</h2>
          <h3 style={{ color: "green" }}>Shop ID: 445</h3>
        </div>
      </div>
      <div className="profileMain">
        <h1>Dashboard</h1>
        <div className="detailsCards">
          {/* single details card */}
          <div className="detailsCard">
            <h4>৫০০০ টাকা</h4>
            <h3>মোট বিক্রয়</h3>
          </div>
          {/* single details card */}
          <div className="detailsCard">
            <h4>৫০০০ টাকা</h4>
            <h3>মোট বিক্রয়</h3>
          </div>
          {/* single details card */}
          <div className="detailsCard">
            <h4>৫০০০ টাকা</h4>
            <h3>মোট বিক্রয়</h3>
          </div>
          {/* single details card */}
          <div className="detailsCard">
            <h4>৫০০০ টাকা</h4>
            <h3>মোট বিক্রয়</h3>
          </div>
          {/* single details card */}
          <div className="detailsCard">
            <h4>৫০০০ টাকা</h4>
            <h3>মোট বিক্রয়</h3>
          </div>
          {/* single details card */}
          <div className="detailsCard">
            <h4>৫০০০ টাকা</h4>
            <h3>মোট বিক্রয়</h3>
          </div>
          {/* single details card */}
          <div className="detailsCard">
            <h4>৫০০০ টাকা</h4>
            <h3>মোট বিক্রয়</h3>
          </div>
          {/* single details card */}
          <div className="detailsCard">
            <h4>৫০০০ টাকা</h4>
            <h3>মোট বিক্রয়</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
