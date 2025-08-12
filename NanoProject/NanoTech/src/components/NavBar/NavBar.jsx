import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import { Link, NavLink, useLocation } from "react-router";
import {
  FaBars,
  FaCartPlus,
  FaHeart,
  FaMoon,
  FaSun,
  FaXmark,
} from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import usaMap from "../../assets/icons/map.png";
import bangladesh from "../../assets/icons/bangladesh.png";
import { ThemeContext } from "../../contexts/Theme/ThemeContext";
import useLanguage from "../../hooks/useLanguage";
const html = document.getElementsByTagName("html")[0];
const NavBar = () => {
  const location = useLocation();
  const { theme, setTheme } = useContext(ThemeContext);
  const [isTrue, setIsTrue] = useState(false);
  const [dropTrue, setIsDropTrue] = useState(false);
  const [langTrue, setLangTrue] = useState(false);
  const { language, setLanguage } = useLanguage();
  const langSelect = (
    <>
      <span className="lang-select">
        <img
          className="usa-flag"
          src={language === "bangla" ? bangladesh : usaMap}
          alt={language}
        />
        {language === "bangla"
          ? `${language === "bangla" ? "বাংলা" : "Bangla"}`
          : `${language === "ইংরেজি" ? "বাংলা" : "English"}`}
        {langTrue ? <IoIosArrowUp /> : <IoIosArrowDown />}
        {langTrue && (
          <ul id="langDropDown" className="application-dropdown lang">
            <li
              onClick={() => {
                setLanguage("english");
                setIsTrue(false);
              }}
            >
              <span className={"lang-drop"}>
                <img className="usa-flag" src={usaMap} alt="english" />
                {language === "bangla" ? "ইংরেজি" : "English"}
              </span>
            </li>
            <li
              onClick={() => {
                setLanguage("bangla");
                setIsTrue(false);
              }}
            >
              <span className={"lang-drop"}>
                <img className="usa-flag" src={bangladesh} alt="bangla" />
                {language === "bangla" ? "বাংলা" : "Bangla"}
              </span>
            </li>
          </ul>
        )}
      </span>
    </>
  );
  const links = (
    <>
      <ul className="links">
        <li onClick={() => setIsTrue(false)}>
          <NavLink to={"/"}>{language === "bangla" ? "হোম" : "Home"} </NavLink>
        </li>
        <li onClick={() => setIsTrue(false)}>
          <NavLink to={"/products"}>
            {language === "bangla" ? "পন্যসমূহ" : "Products"}
          </NavLink>
        </li>
        <li onClick={() => setIsTrue(false)}>
          <NavLink to={"/contact"}>
            {language === "bangla" ? "যোগাযোগ" : "Contact"}
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink id="sr" to={"/sales-representative"}>
            {language === "bangla" ? "আবেদন" : "Application"}
          </NavLink>
        </li>

        {location.pathname == "/products" ? (
          <>
            <li onClick={() => setIsTrue(false)}>
              <NavLink to={"/login"}>
                {language === "bangla" ? "লগইন" : "Login"}
              </NavLink>
            </li>
            <li onClick={() => setIsTrue(false)}>
              <NavLink to={"/signup"}>
                {language === "bangla" ? "নিবন্ধন" : "SignUp"}
              </NavLink>
            </li>
          </>
        ) : (
          // <li
          //   onMouseEnter={() => {
          //     setIsDropTrue(true);
          //   }}
          //   onMouseLeave={() => {
          //     setIsDropTrue(false);
          //   }}
          //   className="application"
          // >
          //   <button className="btn">
          //     {language === "bangla" ? "আবেদন" : "Application"}
          //   </button>
          //   {/* dropdown */}
          //   {dropTrue && (
          //     <ul className="application-dropdown">
          //       {/* <li>
          //         <NavLink to={"up"}>ইউনিয়ন প্রতিনিধি</NavLink>
          //       </li> */}
          //       <li
          //         onClick={(e) => {
          //           e.stopPropagation();
          //           setIsTrue(false);
          //         }}
          //       ></li>
          //     </ul>
          //   )}
          // </li>
          <></>
        )}
      </ul>
    </>
  );
  return (
    <div id="navBar">
      {/* Navbar */}
      <nav className="navbar">
        {/* Site logo */}
        <div>
          <Link to={"/"}>
            <img className="logo" src="/logo.png" alt="NanoTech Logo" />
          </Link>
        </div>
        {/* Site logo */}
        {/* Navbar links for Large device */}
        <div className="navbar-links-container">{links}</div>
        {/* Navbar links for Large device */}
        {/* Navbar links for small device */}
        {isTrue && (
          <div className="navbar-links-container2">
            {links}
            <div
              onClick={() => {
                setLangTrue(!langTrue);
              }}
              id="languageSwitch2"
              className="application"
            >
              {langSelect}
            </div>
            <div
              onClick={() => setIsTrue(false)}
              id="mobileTheme"
              className="theme-icon"
            >
              {theme === "dark" ? (
                <FaSun
                  onClick={() => setTheme("light")}
                  size={20}
                  className="themeIcon"
                />
              ) : (
                <FaMoon
                  onClick={() => setTheme("dark")}
                  size={20}
                  className="themeIcon"
                />
              )}
            </div>
          </div>
        )}
        {/* Navbar links for small device */}
        {/* Action buttons */}
        <div className="buttons">
          <div>
            {/* Language Switch */}
            <div
              onClick={() => {
                setLangTrue(!langTrue);
              }}
              id="languageSwitch"
              className="application"
            >
              {langSelect}
            </div>
            {/* Language Switch */}
          </div>
          {/* cart and wishlist button */}
          {location.pathname !== "/" && (
            <div className="wishCart2">
              <div>
                <FaCartPlus size={18} />
              </div>
            </div>
          )}

          {/* cart and wishlist button */}
          {/* Theme changer */}
          <div className="theme-icon">
            {theme === "dark" ? (
              <FaSun
                onClick={() => setTheme("light")}
                size={20}
                className="themeIcon"
              />
            ) : (
              <FaMoon
                onClick={() => setTheme("dark")}
                size={20}
                className="themeIcon"
              />
            )}
          </div>
          {/* Hamburger icon */}
          {isTrue ? (
            <span onClick={() => setIsTrue(!isTrue)} className="hamburger">
              <FaXmark size={20} />
            </span>
          ) : (
            <span onClick={() => setIsTrue(!isTrue)} className="hamburger">
              <FaBars size={20} />
            </span>
          )}
          {/* Hamburger icon */}
          {/* Theme changer */}
        </div>
        {/* Action buttons */}
      </nav>
      {/* Navbar */}
    </div>
  );
};

export default NavBar;
