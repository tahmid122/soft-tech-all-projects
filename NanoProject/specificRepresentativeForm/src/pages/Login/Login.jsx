import React, { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router";
const Login = () => {
  const [isShow, setIsShow] = useState(false);
  const [isPopupShow, setIsPopupShow] = useState(false);
  const [isTimerShow, setIsTimerShow] = useState(false);
  const [timer, setTimer] = useState(15);
  const navigate = useNavigate();
  useEffect(() => {
    if (isPopupShow) {
      const timerInterval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      if (timer == 0) {
        clearInterval(timerInterval);
        setIsTimerShow(false);
      }
      return () => {
        clearInterval(timerInterval);
      };
    }
  }, [timer, isTimerShow]);
  return (
    // Login Form
    <section id="login">
      <div className="imageContainer">
        <img src="/logo.png" alt="" />
      </div>
      <h3>বিক্রয় প্রতিনিধি Login</h3>
      <form id="loginForm">
        <div className="formElement">
          <input type="text" placeholder="Mobile number" />
        </div>
        <div className="formElement" style={{ position: "relative" }}>
          <input type={isShow ? "text" : "password"} placeholder="Password" />
          <span onClick={() => setIsShow(!isShow)} className="eyeBtn">
            {isShow ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
          </span>
        </div>
        <button className="btn">Login</button>
        <span
          onClick={() => {
            setIsPopupShow(true);
            setIsTimerShow(true);
          }}
          className="forgetPass"
        >
          Forgotten password?
        </span>
      </form>
      <div id="popUp" style={{ display: `${isPopupShow ? "flex" : "none"}` }}>
        <div className="popUpContainer">
          <span onClick={() => setIsPopupShow(false)} className="xMark">
            <FaXmark size={20} />
          </span>
          <h4>OTP গেছে</h4>
          <div className="formElement">
            <input type="text" placeholder="Enter OTP" />
          </div>
          <div className="resentContainer">
            {isTimerShow ? (
              <span className="resend">Resend within {timer}s</span>
            ) : (
              <span
                onClick={() => {
                  setTimer(15);
                  setIsTimerShow(true);
                }}
                className="resent"
              >
                Resent
              </span>
            )}
          </div>
          <div className="formElement">
            <button onClick={() => navigate("/new-password")} className="btn">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
