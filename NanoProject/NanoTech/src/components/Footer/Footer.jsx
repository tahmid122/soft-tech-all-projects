import React from "react";
import "./footer.css";
import { Link } from "react-router";
import {
  FaEnvelope,
  FaFacebook,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";
import useLanguage from "../../hooks/useLanguage";
const Footer = () => {
  const { language } = useLanguage();
  const lang = language === "bangla";
  return (
    // Footer
    <section id="footer" className="footer-bg">
      <section className="global-width">
        {/* main footer */}
        <div className="footer-main">
          {/* footer part 1 */}
          <div className="tech">
            <h3 className="footer-title">
              {lang
                ? "ন্যানো-টেক উৎপাদন প্রযুক্তি"
                : "Nano-Tech Production Technology"}
            </h3>
            <p style={{ color: "white" }}>
              {lang
                ? "ন্যানো-টেক প্রোডাকশন টেকনোলজি একটি উদ্ভাবনী ইলেকট্রনিক্স উৎপাদনকারী কোম্পানি, যা উচ্চমানের গৃহস্থালী যন্ত্রপাতি এবং স্মার্ট ডিভাইস তৈরিতে নিবেদিতপ্রাণ যা দৈনন্দিন জীবনকে আরও সহজ এবং দক্ষ করে তোলে।"
                : "Nano-Tech Production Technology is an innovative electronics manufacturing company, dedicated to producing high-quality home appliances and smart devicesthat make everyday life easier and more efficient."}
            </p>
          </div>
          {/* footer part 1 */}
          {/* footer part 2 */}
          <div>
            <h3 className="footer-title">{lang ? "কোম্পানী" : "Company"}</h3>
            <ul className="footer-menu">
              <li>
                <Link>{lang ? "হোম" : "Home"}</Link>
              </li>
              <li>
                <Link>{lang ? "পন্যসমূহ" : "Products"}</Link>
              </li>
              <li>
                <Link>{lang ? "যোগাযোগ" : "Contact"}</Link>
              </li>
              <li>
                <Link>{lang ? "আমাদের সম্পর্কে" : "About us"}</Link>
              </li>
            </ul>
          </div>
          {/* footer part 2 */}
          {/* footer part 3 */}
          <div>
            <h3 className="footer-title">Resources</h3>
            <ul className="footer-menu">
              <li>
                <Link to={"/sales-representative"}>
                  {lang ? "আবেদন" : "Application"}
                </Link>
              </li>
              <li>
                <Link>{lang ? "শর্তাবলী" : "Terms & Conditions"}</Link>
              </li>
              <li>
                <Link>{lang ? "ওয়ারেন্টি নীতি" : "Warranty Policy"}</Link>
              </li>
              <li>
                <Link>{lang ? "পেশা" : "Career"}</Link>
              </li>
            </ul>
          </div>
          {/* footer part 3 */}
          {/* footer part 4 */}
          <div className="contact">
            <h3 className="footer-title">{lang ? "ঠিকানা" : "Address"}</h3>
            <div className="address">
              <p style={{ color: "white" }}>
                <FaLocationDot />{" "}
                {lang ? "লেভেল #১৩, এমটি বিল্ডিং" : "Level #13, MT Building"}
              </p>
              <p style={{ color: "white" }}>
                {" "}
                {lang
                  ? "যশোর সফটওয়্যার টেকনোলোজি পার্ক, যশোর"
                  : "Jashore Software Technology Park, Jashore"}{" "}
              </p>
              <p style={{ color: "white" }}>
                <FaEnvelope />
                contact@sift-techtechnologyllc.com
              </p>
              <p style={{ color: "white" }}>
                <FaPhone /> {lang ? "+৮৮০ ১৩২৯৬৩৬৮৯০" : "+880 1329636890"}
              </p>
            </div>
          </div>
          {/* footer part 4 */}
        </div>
        {/* main footer */}
        <hr className="hr-style" />
        {/* Down footer */}
        <div className="copyright">
          <div className="social-medias">
            <a href="https://www.facebook.com/nanotechpt" target="_blank">
              <div>
                <FaFacebook size={18} />
              </div>
            </a>
            <a href="https://wa.me/+8801329636890" target="_blank">
              <div>
                <FaWhatsapp size={20} />
              </div>
            </a>
          </div>
          <small>
            &copy;{" "}
            {lang
              ? "২০২৫ ন্যানো-টেক উৎপাদন প্রযুক্তি। সর্বস্বত্ব সংরক্ষিত।"
              : "2025 Nano-Tech Production Technology. All rights reserved."}
          </small>
        </div>
        {/* Down footer */}
      </section>
    </section>
    // Footer
  );
};

export default Footer;
