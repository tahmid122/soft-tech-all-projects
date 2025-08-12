import React, { useEffect, useState } from "react";
import "./signUp.css";
import { Link } from "react-router";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import useLanguage from "../../hooks/useLanguage";
const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [isNidExist, setIsNidExist] = useState(false);
  const [submittedData, setSubmittedData] = useState({});
  const [signaturePreview, setSignaturePreview] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [divisions, setDivisions] = useState([]);
  const [division, setDivision] = useState(null);
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState(null);
  const [upazillas, setUpazillas] = useState([]);
  const [upazilla, setUpazilla] = useState(null);
  const [unions, setUnions] = useState([]);
  const [union, setUnion] = useState(null);
  const { language } = useLanguage();
  const lang = language === "bangla";
  // application form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    setSubmittedData(data);
    setIsModal(true);
  };
  // getting all districts under the division
  const getDistricts = async (param) => {
    const id = param.split("|")[0];
    console.log(id);
    try {
      const res = await fetch(
        `https://bdapi.vercel.app/api/v.1/district/${id}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = await res.json();
      setDistricts(data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  // getting all upazillas under the districts
  const getUpazillas = async (param) => {
    const id = param.split("|")[0];

    try {
      const res = await fetch(
        `https://bdapi.vercel.app/api/v.1/upazilla/${id}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = await res.json();
      setUpazillas(data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  // getting all unions under the upazilla
  const getUnions = async (param) => {
    const id = param.split("|")[0];

    try {
      const res = await fetch(`https://bdapi.vercel.app/api/v.1/union/${id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      setUnions(data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  if (isModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  const closeModal = () => {
    setIsModal(false);
  };
  useEffect(() => {
    try {
      const fetchDivisions = async () => {
        const res = await fetch("https://bdapi.vercel.app/api/v.1/division", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });
        const data = await res.json();
        setDivisions(data.data);
      };
      fetchDivisions();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    // signup page
    <div className="bg-signUp">
      <section id="signUp" className="global-width">
        <div className="signUp">
          {/* title */}
          <h2>{lang ? "সাইন আপ" : "SignUp"}</h2>
          {/* descriptin */}
          <p style={{ marginTop: "10px" }}>
            {lang
              ? "সাইন আপ করতে নীচের তথ্য সমূহ পূরণ করুন!"
              : "Fill out the information below to sign up!"}
          </p>
          {/* signup form */}
          <div className="signUp-form">
            <form onSubmit={handleSubmit}>
              <div className="mobileFlex">
                {/* form element */}
                <div className="form-element">
                  <label htmlFor="firstName">
                    {lang ? "প্রথম নাম" : "First Name"}
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder={
                      lang ? "আপনার প্রথম নাম লিখুন" : "Enter your first name"
                    }
                    required
                  />
                </div>
                {/* form element */}
                <div className="form-element">
                  <label htmlFor="lastName">
                    {lang ? "শেষ নাম" : "Last Name"}
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder={
                      lang ? "আপনার শেষ নাম লিখুন" : "Enter your last name"
                    }
                    required
                  />
                </div>
              </div>
              {/* form element */}
              <div className="form-element">
                <label htmlFor="email">
                  {lang ? "ইমেইল" : "Email"}
                  <span
                    className="optional"
                    style={{ color: "black", fontSize: "14px" }}
                  >
                    ({lang ? "ঐচ্ছিক" : "Optional"})
                  </span>{" "}
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder={
                    lang ? "আপনার ইমেইল লিখুন" : "Enter your email address"
                  }
                />
              </div>
              <div className="form-element">
                <label htmlFor="mobile">
                  {lang ? "মোবাইল" : "Mobile"}
                  <span style={{ color: "red" }}>*</span>{" "}
                </label>
                <input
                  type="text"
                  name="mobile"
                  placeholder={
                    lang
                      ? "আপনার ফোন নাম্বার লিখুন"
                      : "Enter your mobile number"
                  }
                  required
                />
              </div>
              {/* address */}
              <div className="mobileFlex">
                <div className="form-element">
                  <label htmlFor="applicantDivision">
                    {lang ? "বিভাগঃ" : "Division:"}
                    <span
                      style={{
                        color: "red",
                        marginLeft: "-10px",
                      }}
                    >
                      *
                    </span>
                  </label>
                  <select
                    onChange={(e) => {
                      setDivision(e.target.value);
                      getDistricts(e.target.value);
                    }}
                    name="applicantDivision"
                    required
                  >
                    <option style={{ display: "none" }}>
                      {lang ? "বিভাগ সিলেক্ট করুন" : "Select Division"}
                    </option>
                    {divisions?.map((division) => {
                      return (
                        <option
                          key={division.id}
                          value={`${division.id}|${division.bn_name}`}
                        >
                          {division.bn_name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="form-element">
                  <label htmlFor="applicantCountry">
                    {lang ? "দেশঃ" : "Country:"}
                  </label>
                  <input
                    type="text"
                    name="applicantCountry"
                    value={"বাংলাদেশ"}
                    readOnly
                  />
                </div>
              </div>

              {/* Form element */}
              <div className="mobileFlex">
                <div className="form-element">
                  <label htmlFor="applicantDistrict">
                    {lang ? "জেলাঃ" : "District:"}
                    <span
                      style={{
                        color: "red",
                        marginLeft: "-10px",
                      }}
                    >
                      *
                    </span>
                  </label>
                  <select
                    onChange={(e) => {
                      setDistrict(e.target.value);
                      getUpazillas(e.target.value);
                    }}
                    name="applicantDistrict"
                    required
                    disabled={division ? false : true}
                  >
                    <option style={{ display: "none" }}>
                      {lang ? "জেলা সিলেক্ট করুন" : "Select District"}
                    </option>
                    {districts?.map((district) => {
                      return (
                        <option
                          key={district.id}
                          value={`${district.id}|${district.bn_name}`}
                        >
                          {district.bn_name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="form-element">
                  <label htmlFor="applicantUpazilla">
                    {lang ? "উপজেলাঃ" : "Upazilla:"}
                    <span
                      style={{
                        color: "red",
                        marginLeft: "-10px",
                      }}
                    >
                      *
                    </span>
                  </label>
                  <select
                    onChange={(e) => {
                      setUpazilla(e.target.value);
                      getUnions(e.target.value);
                    }}
                    name="applicantUpazilla"
                    required
                    disabled={district ? false : true}
                  >
                    <option style={{ display: "none" }}>
                      {lang ? "উপজেলা সিলেক্ট করুন" : "Select Upazilla"}
                    </option>
                    {upazillas?.map((upazilla) => {
                      return (
                        <option
                          key={upazilla.id}
                          value={`${upazilla.id}|${upazilla.bn_name}`}
                        >
                          {upazilla.bn_name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              {/* Form element */}
              <div className="mobileFlex">
                <div className="form-element">
                  <label htmlFor="applicantUnion">
                    {lang ? "ইউনিয়নঃ" : "Union:"}{" "}
                    <span
                      style={{
                        color: "red",
                        marginLeft: "-10px",
                      }}
                    >
                      *
                    </span>{" "}
                  </label>
                  <select
                    name="applicantUnion"
                    required
                    disabled={upazilla ? false : true}
                  >
                    <option style={{ display: "none" }}>
                      {lang ? "ইউনিয়ন সিলেক্ট করুন" : "Select Union"}
                    </option>
                    {unions?.map((union) => {
                      return (
                        <option
                          key={union.id}
                          value={`${union.id}|${union.bn_name}`}
                        >
                          {union.bn_name}
                        </option>
                      );
                    })}
                  </select>{" "}
                </div>
                <div className="form-element">
                  <label htmlFor="applicantWord">
                    {lang ? "ওয়ার্ড নংঃ" : "Word No:"}{" "}
                    <span
                      style={{
                        color: "red",
                        marginLeft: "-10px",
                      }}
                    >
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    name="applicantWord"
                    required
                    placeholder={
                      lang ? "ওয়ার্ড নাম্বার লিখুন" : "Enter word number"
                    }
                  />
                </div>
              </div>

              {/* address */}
              <div className="form-element">
                <label htmlFor="photo">
                  {lang ? "প্রোফাইল ছবি" : "Profile Photo"}
                </label>
                <input type="file" name="photo" />
              </div>
              {/* form element */}
              <div className="form-element">
                <label htmlFor="password">
                  {lang ? "পাসওয়ার্ড" : "Password"}
                  <span style={{ color: "red" }}>*</span>{" "}
                </label>
                <div className="passwordInput">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    placeholder={
                      lang ? "আপনার পাসওয়ার্ড লিখুন" : "Enter your password"
                    }
                    required
                  />
                  {showPass ? (
                    <IoMdEyeOff
                      onClick={() => setShowPass(false)}
                      size={20}
                      className="eyeBtn"
                    />
                  ) : (
                    <IoMdEye
                      onClick={() => setShowPass(true)}
                      size={20}
                      className="eyeBtn"
                    />
                  )}
                </div>
              </div>
              {/* form element */}
              <div className="form-element">
                <label htmlFor="confirmPassword">
                  {lang ? "কনফার্ম পাসওয়ার্ড" : "Confirm Password"}
                  <span style={{ color: "red" }}>*</span>{" "}
                </label>
                <div className="passwordInput">
                  <input
                    type={showPass ? "text" : "password"}
                    name="confirmPassword"
                    placeholder={
                      lang
                        ? "আপনার পাসওয়ার্ড নিশ্চিত করুন"
                        : "Enter your confirm password"
                    }
                    required
                  />
                  {showPass ? (
                    <IoMdEyeOff
                      onClick={() => setShowPass(false)}
                      size={20}
                      className="eyeBtn"
                    />
                  ) : (
                    <IoMdEye
                      onClick={() => setShowPass(true)}
                      size={20}
                      className="eyeBtn"
                    />
                  )}
                </div>
              </div>
              {/* form element */}
              <div className="form-element" style={{ marginTop: "20px" }}>
                <button className="btn">{lang ? "সাইন আপ" : "Sign Up"}</button>
              </div>
            </form>
            <p>
              {lang
                ? "ইতিমধ্যে একটি অ্যাকাউন্ট আছে?"
                : "Already have an account?"}{" "}
              <Link to={"/login"}>{lang ? "লগইন" : "Login"}</Link>
            </p>
          </div>
          {/* signup form */}
        </div>
        {/* signup form image container */}
        <div className="signUpImage">
          <img src="./products.png" alt="image" />
        </div>
        {/* signup form container */}
      </section>
    </div>
    // signup page
  );
};

export default SignUp;
