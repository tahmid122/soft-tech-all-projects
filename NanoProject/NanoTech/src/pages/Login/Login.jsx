import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router";
import useLanguage from "../../hooks/useLanguage";
const Login = () => {
  const { language } = useLanguage();
  const lang = language === "bangla";
  return (
    <div className="bg-login">
      <section id="login" className="global-width">
        <div className="signIn">
          {/* title */}
          <h2>{lang ? "সাইন ইন" : "SignIn"}</h2>
          {/* description */}
          <p style={{ marginTop: "10px" }}>
            {lang
              ? "আপনার অ্যাকাউন্টে সাইন ইন করতে আপনার ইমেল ঠিকানা এবং পাসওয়ার্ড লিখুন।"
              : " Enter your email address and password to sign in to your account."}
          </p>
          {/* login form */}
          <div className="login-form">
            <form>
              {/* form element */}
              <div className="form-element">
                <label htmlFor="email">{lang ? "ইমেইল" : "Email"} </label>
                <input
                  type="email"
                  placeholder={
                    lang ? "আপনার ইমেইল লিখুন" : "Enter your email address"
                  }
                  required
                />
              </div>
              {/* form element */}
              <div className="form-element">
                <label htmlFor="email">
                  {lang ? "পাসওয়ার্ড" : "Password"}{" "}
                </label>
                <input
                  type="email"
                  placeholder={
                    lang ? "আপনার পাসওয়ার্ড লিখুন" : "Enter your password"
                  }
                  required
                />
              </div>
              <div className="form-element" style={{ marginTop: "20px" }}>
                <button className="btn">{lang ? "জমা দিন" : "Submit"}</button>
              </div>
            </form>
            <p>
              {lang ? "কোন অ্যাকাউন্ট নেই?" : "Don't have an account?"}{" "}
              <Link to={"/signup"}>{lang ? "সাইন আপ" : "Sign Up"}</Link>
            </p>
          </div>
          {/* login form */}
        </div>
        {/* login form image container */}
        <div className="form-last">
          <img src="./products.png" alt="" />
        </div>
        {/* login form image container */}
      </section>
    </div>
  );
};

export default Login;
