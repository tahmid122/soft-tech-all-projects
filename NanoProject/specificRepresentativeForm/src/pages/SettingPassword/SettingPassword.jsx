import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
const SettingPassword = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <section id="login">
      <div className="imageContainer">
        <img src="/logo.png" alt="" />
      </div>
      <h3>Password Reset</h3>
      <form id="loginForm">
        <div className="formElement" style={{ position: "relative" }}>
          <input
            type={isShow ? "text" : "password"}
            placeholder="New Password"
          />
          <span onClick={() => setIsShow(!isShow)} className="eyeBtn">
            {isShow ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
          </span>
        </div>
        <div className="formElement" style={{ position: "relative" }}>
          <input
            type={isShow ? "text" : "password"}
            placeholder="Confirm New Password"
          />
          <span onClick={() => setIsShow(!isShow)} className="eyeBtn">
            {isShow ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
          </span>
        </div>
        <button className="btn">Confirm</button>
      </form>
    </section>
  );
};

export default SettingPassword;
