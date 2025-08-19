/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import "./salesRepresentative.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import FormMOdal from "../../components/FormModal/FormMOdal";
const SalesRepresentative = () => {
  const [isNidExist, setIsNidExist] = useState(false);
  const [submittedData, setSubmittedData] = useState({});
  const [signaturePreview, setSignaturePreview] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [divisions, setDivisions] = useState([]);
  const [division, setDivision] = useState(null);
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState([]);
  const [upazillas, setUpazillas] = useState([]);
  const [unions, setUnions] = useState([]);
  const [photo, setPhoto] = useState(null);
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
  // photo upload
  const photoRef = useRef(null);
  const handlePhotoUpload = () => {
    photoRef.current.click();
  };
  return (
    // Sales representative section
    <section id="salesRepresentative" className="sr-bg">
      {/* section title */}
      <section className="global-width">
        <SectionTitle
          title={"Nano-Tech Production Technology"}
          description={"বিক্রয় প্রতিনিধি আবেদন ফর্ম"}
        />
        {/* section title */}
        <div>
          {/* application form */}
          <form onSubmit={handleSubmit} className="sp-form">
            {/* Form element */}
            <div>
              <div className="fileUploadContainer">
                <h4>আবেদনকারীর তথ্যঃ</h4>
                <div className="fileUpload">
                  <img
                    onClick={handlePhotoUpload}
                    src={photo ? photo : "/uploadImage.png"}
                    alt="file upload"
                  />
                  ছবি
                  <input
                    ref={photoRef}
                    style={{ opacity: "0" }}
                    type="file"
                    required
                    name="applicantPhoto"
                    onChange={(e) => {
                      const photoURL = URL.createObjectURL(e.target.files[0]);
                      setPhoto(photoURL);
                    }}
                    accept="image/*"
                  />
                </div>
              </div>

              <div className="form-element">
                <div className="inner-input">
                  <label htmlFor="applicantSalesPointName">
                    সেলস পয়েন্টের নামঃ
                    <span
                      style={{
                        color: "red",
                        marginLeft: "-10px",
                      }}
                    >
                      *
                    </span>
                  </label>
                  <input type="text" name="applicantSalesPointName" required />
                </div>
              </div>
              <div className="form-element element-column">
                <div className="inner-input">
                  <label htmlFor="applicantName">
                    নামঃ
                    <span
                      style={{
                        color: "red",
                        marginLeft: "-10px",
                      }}
                    >
                      *
                    </span>
                  </label>
                  <input type="text" name="applicantName" required />
                </div>
                <div className="inner-input" style={{ marginTop: "-12px" }}>
                  <label htmlFor="applicantNid" className="nidCheck">
                    {isNidExist ? <>জন্মনিবন্ধন নংঃ</> : <>এন আইডি নংঃ (নিজ)</>}
                    <span className="nid-checkbox">
                      <input
                        type="checkbox"
                        name="nidStatus"
                        onChange={(e) => setIsNidExist(e.target.checked)}
                      />
                      <label htmlFor="notAvailable">নাই</label>
                    </span>
                  </label>
                  {isNidExist ? (
                    <input type="text" name="applicantDobNumber" />
                  ) : (
                    <input type="text" name="applicantNid" />
                  )}
                </div>
              </div>
              {isNidExist ? (
                <div className="form-element">
                  <div className="inner-input">
                    <label htmlFor="applicantVillage">
                      নাগরিক সনদপত্রঃ{" "}
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
                      type="file"
                      name="applicantVillage"
                      required
                      accept="image/*"
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="form-element element-column">
                <div className="inner-input">
                  <label htmlFor="applicantFatherName">
                    পিতা{" "}
                    <span
                      style={{
                        color: "red",
                        marginLeft: "-10px",
                      }}
                    >
                      *
                    </span>
                  </label>
                  <input type="text" name="applicantFatherName" required />
                </div>
                <div className="inner-input">
                  <label htmlFor="applicantFatherNid">এন আইডি নংঃ (পিতা)</label>
                  <input type="text" name="applicantFatherNid" />
                </div>
              </div>
              <div className="form-element">
                <div className="inner-input">
                  <label htmlFor="applicantMobile">
                    মোবাইলঃ{" "}
                    <span
                      style={{
                        color: "red",
                        marginLeft: "-10px",
                      }}
                    >
                      *
                    </span>
                  </label>
                  <input type="text" name="applicantMobile" required />
                </div>
                <div className="inner-input">
                  <label htmlFor="applicantWhatsapp">হোয়াটসঅ্যাপঃ</label>
                  <input type="text" name="applicantWhatsapp" />
                </div>
              </div>
            </div>
            {/* Form element */}
            <div className="margin-top">
              <h4>বিক্রয় প্রতিনিধি হতে ইচ্ছুকঃ </h4>
              <div className="form-element">
                <div className="inner-input">
                  <label htmlFor="ability">
                    বিক্রয় প্রতিনিধি নেওয়ার জন্য ১০ X ১০ ফুটের দোকান আছে?
                  </label>
                  <div className="radio-container">
                    <div className="radio-single">
                      <input
                        className="radio"
                        name="ability"
                        value={"yes"}
                        type="radio"
                      />
                      <label htmlFor="yes">হ্যাঁ</label>
                    </div>
                    <div className="radio-single">
                      <input
                        className="radio"
                        name="ability"
                        value={"no"}
                        type="radio"
                      />
                      <label htmlFor="no">না</label>
                    </div>
                    <div className="radio-single">
                      <input
                        className="radio"
                        name="ability"
                        value={"lease"}
                        type="radio"
                      />
                      <label htmlFor="lease">ভাড়া</label>
                    </div>
                    <div className="radio-single">
                      <input
                        className="radio"
                        name="ability"
                        value={"own"}
                        type="radio"
                      />
                      <label htmlFor="own">নিজস্ব</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-element">
                <div className="inner-input">
                  <label htmlFor="type">দোকানের ধরনঃ</label>
                  <div className="radio-container">
                    <div className="radio-single">
                      <input
                        className="radio"
                        name="type"
                        value={"lease"}
                        type="radio"
                      />
                      <label htmlFor="lease">ভাড়া</label>
                    </div>
                    <div className="radio-single">
                      <input
                        className="radio"
                        name="type"
                        value={"own"}
                        type="radio"
                      />
                      <label htmlFor="own">নিজস্ব</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Form element */}
            <div className="form-element">
              <div className="inner-input">
                <label htmlFor="applicantVillage">
                  গ্রাম/বাজারের নামঃ{" "}
                  <span
                    style={{
                      color: "red",
                      marginLeft: "-10px",
                    }}
                  >
                    *
                  </span>
                </label>
                <input type="text" name="applicantVillage" required />
              </div>
            </div>
            {/* Form element */}
            <div className="form-element">
              <div className="inner-input">
                <label htmlFor="applicantDivision">
                  বিভাগঃ{" "}
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
                  <option style={{ display: "none" }}></option>
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
              <div className="inner-input">
                <label htmlFor="applicantCountry">দেশঃ</label>
                <input
                  type="text"
                  name="applicantCountry"
                  value={"বাংলাদেশ"}
                  readOnly
                />
              </div>
            </div>
            {/* Form element */}
            <div className="form-element">
              <div className="inner-input">
                <label htmlFor="applicantDistrict">
                  জেলাঃ{" "}
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
                >
                  <option style={{ display: "none" }}></option>
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
              <div className="inner-input">
                <label htmlFor="applicantUpazilla">
                  উপজেলাঃ
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
                    getUnions(e.target.value);
                  }}
                  name="applicantUpazilla"
                  required
                >
                  <option style={{ display: "none" }}></option>
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
                </select>{" "}
              </div>
            </div>
            {/* Form element */}
            <div className="form-element">
              <div className="inner-input">
                <label htmlFor="applicantUnion">
                  ইউনিয়নঃ{" "}
                  <span
                    style={{
                      color: "red",
                      marginLeft: "-10px",
                    }}
                  >
                    *
                  </span>{" "}
                </label>
                <select name="applicantUnion" required>
                  <option style={{ display: "none" }}></option>
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
              <div className="inner-input">
                <label htmlFor="applicantWord">
                  ওয়ার্ড নংঃ{" "}
                  <span
                    style={{
                      color: "red",
                      marginLeft: "-10px",
                    }}
                  >
                    *
                  </span>
                </label>
                <input type="text" name="applicantWord" required />
              </div>
            </div>
            {/* Form element */}
            <div className="form-element">
              <div className="inner-input applicantSignature">
                <label htmlFor="applicantSignature">
                  আবেদনকারীর স্বাক্ষরঃ{" "}
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
                  type="file"
                  name="applicantSignature"
                  required
                  accept="image/*"
                  onChange={(e) => setSignaturePreview(e.target.files[0])}
                />
              </div>
            </div>

            <div className="margin-top">
              <h4>ইউনিয়ন প্রতিনিধির তথ্যঃ</h4>
              <div className="form-element">
                <div className="inner-input">
                  <label htmlFor="RepresentativeName">প্রতিনিধির নামঃ</label>
                  <input type="text" name="RepresentativeName" />
                </div>
              </div>
              <div className="form-element">
                <div className="inner-input">
                  <label htmlFor="RepresentativeId">প্রতিনিধির আইডিঃ</label>
                  <input type="text" name="RepresentativeId" />
                </div>
                <div className="inner-input">
                  <label htmlFor="RepresentativeMobile">মোবাইলঃ</label>
                  <input type="text" name="RepresentativeMobile" />
                </div>
              </div>
            </div>
            {/* submit button */}
            <button className="btn formBtn">জমা দিন</button>
          </form>
          {/* application form */}
        </div>
      </section>
      {/* form modal */}
      <div style={{ display: `${isModal ? "block" : "none"}` }}>
        <FormMOdal
          submittedData={submittedData}
          closeModal={closeModal}
          signaturePreview={signaturePreview}
        />
      </div>
      {/* form modal */}
    </section>
    // Sales representative section
  );
};

export default SalesRepresentative;
