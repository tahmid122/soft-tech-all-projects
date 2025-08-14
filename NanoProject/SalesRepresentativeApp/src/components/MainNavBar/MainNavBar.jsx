import React from "react";
import "./mainNavBar.css";
import { Link, NavLink } from "react-router";
import { FaCartPlus, FaHome } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { MdOndemandVideo, MdVideoLibrary } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
const MainNavBar = () => {
  return (
    <nav id="mainNavBar" className="marginBottom">
      {/* navbar links */}
      <div>
        <br />
      </div>
      <ul className="navbarLinks">
        <li>
          <NavLink to={"/"}>
            <FaHome size={25} />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/market"}>
            <FaShop size={25} />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/notification"}>
            <FaBell size={25} />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/training"}>
            <MdVideoLibrary size={25} />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/cart"}>
            <FaCartPlus size={25} />
          </NavLink>
        </li>
      </ul>
      <Link to={"/profile"} className="profileNav">
        <img
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
          alt="profile"
        />
      </Link>
    </nav>
  );
};

export default MainNavBar;
