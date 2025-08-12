import React, { useState } from "react";
import "./services.css";
import { FaRegCheckCircle, FaUserCheck } from "react-icons/fa";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { BsLightningCharge } from "react-icons/bs";
import { RiPresentationLine } from "react-icons/ri";

import { Link } from "react-router";
import Popup from "../../../components/Popup/Popup";
import useLanguage from "../../../hooks/useLanguage";
import { FaXmark } from "react-icons/fa6";
// services list data

// services list data
const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const lang = language === "bangla";
  const lists = [
    {
      icon: <FaRegCheckCircle size={18} style={{ color: "red" }} />,
      text: lang
        ? "মাত্র ১০/১০ ফুট দোকান থাকলেই শুরু করুন স্মার্ট ব্যবসা"
        : "Start a smart business with just a 10/10 foot shop",
      color: "#FEE2E2",
    },
    {
      icon: (
        <IoNotificationsCircleOutline size={40} style={{ color: "orange" }} />
      ),
      text: lang
        ? "নামমাত্র বিনিয়োগেই নিজ এলাকায় বিক্রয় প্রতিনিধি হওয়ার সুযোগ"
        : "Opportunity to become a sales representative in your own area with a nominal investment",
      color: "#FFFBEB",
    },
    {
      icon: <BsLightningCharge size={18} style={{ color: "green" }} />,
      text: lang
        ? "ফ্রি ট্যাবলেট, সফটওয়্যার, ওয়েবসাইট ও ডেকোরেশন সুবিধা"
        : "Opportunity to become a sales representative in your own area with a nominal investment",
      color: "#ECFDF5",
    },
    {
      icon: <FaUserCheck size={18} style={{ color: "#7007e0" }} />,
      text: lang
        ? "প্রতিটি জেলায় বিক্রয় প্রতিনিধি নিয়োগ চলছে"
        : "Sales representatives are being recruited in each district.",
      color: "#F3E8FF",
    },
    {
      icon: <RiPresentationLine size={18} style={{ color: "#d12b86" }} />,
      text: lang
        ? "প্রশিক্ষণ ও প্রফেশনাল ফলোআপ সার্ভিস দেওয়া হয় নিয়মিত"
        : "Training and professional follow-up services are provided regularly.",
      color: "#FDF2F8",
    },
  ];
  return (
    <div>
      <section className="services-bg">
        <section className="global-width" id="services">
          {/* services section left side */}
          <div className="services-left">
            {/* services title */}
            <h2>
              {lang
                ? "সহজ ও স্মার্ট ব্যবসা শুরু করুন ন্যানো-টেক এর সাথে"
                : "Start a simple and smart business with Nano-Tech"}
            </h2>
            {/* services description */}
            {/* <p>Experience powerful accounting features - absolutely free.</p> */}
            {/* services lists */}
            <ul className="services-list">
              {lists?.map((list, index) => (
                <li key={index} className="list-item">
                  <div
                    className="list-icon"
                    // style={{ backgroundColor: list.color }}
                  >
                    <img src="/check.gif" alt="check" />
                  </div>
                  <p>{list.text}</p>
                </li>
              ))}
            </ul>
            {/* services lists */}
            {/* services button */}
            <Link to={"/sales-representative"} className="btn">
              {lang ? "আবেদন" : "Application"}
            </Link>
          </div>
          {/* services section left side */}
          {/* services image container */}
          <div className="services-image-container">
            <img
              onClick={() => setIsOpen(true)}
              src="/sales point.jpg"
              alt="banner image"
            />
            <div
              className={`fullImage scale ${isOpen ? "scale" : "hideScale"}`}
            >
              <img src="/sales point.jpg" alt="banner image" />
              <span onClick={() => setIsOpen(false)} className="closeFullImage">
                <FaXmark size={25} />
              </span>
            </div>
          </div>
          {/* services image container */}
        </section>

        {/* <Popup
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          height={"200px"}
          width={"90%s"}
        >
          <h4>
            {`${
              lang
                ? ` আবেদন প্রক্রিয়ার কাজ চলমান,
            অনুগ্রহ করে সময় দিয়ে সহযোগিতা করুন..!`
                : "The application process is ongoing,Please take the time to cooperate..!"
            }`}
          </h4>
        </Popup> */}
      </section>
    </div>
  );
};

export default Services;
