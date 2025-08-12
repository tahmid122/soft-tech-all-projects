import React, { useState } from "react";
import "./banner.css";
import Button from "../../../components/button/Button";
import { Typewriter } from "react-simple-typewriter";
import Popup from "../../../components/Popup/Popup";
import useLanguage from "../../../hooks/useLanguage";
import { FaXmark } from "react-icons/fa6";
const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const lang = language === "bangla";
  return (
    // Banner
    <div className="banner-bg">
      <div id="banner" className="global-width">
        {/* Banner left side content */}
        <div className="banner-left">
          {/* banner title */}
          <h1
            className="hero-title"
            style={{ minHeight: `${lang ? "200px" : "130px"}` }}
          >
            {/* Transform Your Home <br /> with Smart Choices <br /> */}
            {lang ? "ঘরকে করে তুলুন স্মার্ট" : "Make your home smarter"}
            <br />
            <span className="base-color">
              <Typewriter
                words={[
                  `${
                    lang
                      ? "বিশ্বমানের ও উন্নত প্রযুক্তির নিশ্চয়তা"
                      : "World class products"
                  }`,
                  `${
                    lang
                      ? "দৈনন্দিন জীবনকে করে আরও সহজ"
                      : "Simplified your life"
                  }`,
                  `${
                    lang
                      ? "পাচ্ছেন সহজ ও নিরাপদ কিস্তি সুবিধা"
                      : "Installment facilities"
                  }`,
                  `${
                    lang
                      ? "বিক্রয়োত্তর সর্বচ্চ সেবার নিশ্চয়তা"
                      : "Best after sales service"
                  }`,
                ]}
                loop={Infinity}
              />
            </span>
          </h1>
          {/* banner title */}
          {/* banner description */}
          <p>
            {/* */}
            {lang
              ? "ন্যানো-টেক প্রোডাকশন টেকনোলজি একটি আধুনিক ও উন্নত ইলেকট্রনিক্স পন্য  উৎপাদনকারী প্রতিষ্টান, যা আপনার ব্যস্ততম জীবনকে আরও সহজ, সরল ও সুন্দর করে তুলতে বিশ্বমানের হোম এপ্লায়েন্স এবং স্মার্ট আইটি পন্য উৎপাদনে নিশ্চয়তা প্রদান করে।"
              : " Nano-Tech Production Technology is an innovative electronics  manufacturing company, dedicated to producing high-quality home  appliances and smart devices that make everyday life easier and more efficient."}
          </p>
          {/* banner description */}
          {/* banner buttons */}
          <div className="buttons">
            {/* button components */}
            <Button
              text={`${lang ? "পন্যসমূহ" : "Products"}`}
              link={"/products"}
            />
            <Button
              link={"/sales-representative"}
              text={`${lang ? "আবেদন" : "Application"}`}
            />
            {/* button components */}
          </div>
          {/* banner buttons */}
        </div>
        {/* Banner left side content */}
        {/* Banner image container */}
        <div className="banner-img-container">
          <img
            onClick={() => setIsOpen(true)}
            src="/banner2.jpg"
            alt="banner image"
          />
        </div>
        {/* Banner image container */}
      </div>
      <div className={`fullImage scale ${isOpen ? "scale" : "hideScale"}`}>
        <img src="/banner2.jpg" alt="banner image" />
        <span onClick={() => setIsOpen(false)} className="closeFullImage">
          <FaXmark size={25} />
        </span>
      </div>
      {/* <Popup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        height={"200px"}
        width={"90%"}
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
    </div>
    // Banner
  );
};

export default Banner;
