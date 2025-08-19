import React from "react";
import "./contact.css";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import useLanguage from "../../hooks/useLanguage";
const Contact = () => {
  const { language } = useLanguage();
  const lang = language === "bangla";
  return (
    <div className="contact-bg">
      <section id="contact">
        <section>
          <h2>{lang ? "যোগাযোগ" : "Contact"}</h2>
          <div className="contactContainer">
            <div className="addressContainer">
              <h3>
                {lang
                  ? "আজই আমাদের সাথে যোগাযোগ করুন"
                  : "Get in touch with us today"}
              </h3>
              <p>
                {lang
                  ? "ন্যানো-টেক প্রোডাকশন টেকনোলজি একটি উদ্ভাবনী ইলেকট্রনিক্স উৎপাদনকারী কোম্পানি, যা উচ্চমানের গৃহস্থালী যন্ত্রপাতি এবং স্মার্ট ডিভাইস তৈরিতে নিবেদিতপ্রাণ যা দৈনন্দিন জীবনকে আরও সহজ এবং দক্ষ করে তোলে।"
                  : "Nano-Tech Production Technology is an innovative electronics appliances and smart devices that make everyday life easier and more efficient."}
              </p>
              <div className="contact-container">
                <div>
                  <h4>{lang ? "ফোন করুন" : "Give us an call"}</h4>
                  <a href="tel:+8801329636890">
                    <FaPhone /> {lang ? "+৮৮০ ১৩২৯৬৩৬৮৯০" : "+880 1329636890"}
                  </a>
                </div>
                <div>
                  <h4>{lang ? "ঠিকানা" : "Address"}</h4>
                  <div className="address">
                    <p>
                      <FaLocationDot />{" "}
                      {lang
                        ? "লেভেল #১৩, এমটি বিল্ডিং"
                        : "Level #13, MT Building"}
                    </p>
                    <p>
                      {lang
                        ? "যশোর সফটওয়্যার টেকনোলোজি পার্ক, যশোর"
                        : "Jashore Software Technology Park, Jashore"}{" "}
                    </p>
                    <p>
                      <FaEnvelope />
                      <a href="mailto:contact@nano-techbd.com">
                        contact@nano-techbd.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contactFormContainer">
              <form action="#" method="post" id="contactForm">
                <div className="formElement">
                  <label htmlFor="name">{lang ? "নাম" : "Name"}</label>
                  <input
                    type="text"
                    name="name"
                    placeholder={lang ? "আপনার নাম লিখুন" : "Your name here"}
                  />
                </div>
                <div className="flex-container">
                  <div className="formElement">
                    <label htmlFor="name">{lang ? "ইমেইল" : "Email"}</label>
                    <input
                      type="text"
                      name="email"
                      placeholder={
                        lang ? "আপনার ইমেইল লিখুন" : "Your email here"
                      }
                    />
                  </div>
                  <div className="formElement">
                    <label htmlFor="phone">{lang ? "ফোন" : "Phone"}</label>
                    <input
                      type="text"
                      name="phone"
                      placeholder={
                        lang ? "আপনার ফোন নাম্বার লিখুন" : "Your phone here"
                      }
                    />
                  </div>
                </div>
                <div className="formElement">
                  <label htmlFor="message">{lang ? "বার্তা" : "Message"}</label>

                  <textarea
                    name="message"
                    placeholder={
                      lang ? "আপনার বার্তা লিখুন" : "Your message here"
                    }
                  ></textarea>
                </div>
                <div className="formElement">
                  <button className="btn">{lang ? "জমা দিন" : "Submit"}</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Contact;
