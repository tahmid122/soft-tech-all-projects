import React, { useState } from "react";
import "./dashBoardSideBar.css";
import { Link, NavLink } from "react-router";
import { FaTachometerAlt, FaListAlt } from "react-icons/fa";
import { MdDashboard, MdInventory } from "react-icons/md";
import { FaList, FaUserShield } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const DashBoardSideBar = ({
  openModal,
  addProductClick,
  viewProductsClick,
}) => {
  const [isInnerLinkShow, setIsInnerLinkShow] = useState(false);
  return (
    // dashboard sidebar
    <div>
      {/* logo */}
      <div className="flex">
        <Link to={"/"}>
          <img className="dash-logo" src="/logo.png" alt="NanoTech Logo" />
        </Link>
      </div>
      {/* logo */}
      {/* dashboard menu */}
      <div className="menu">
        <ul>
          {/* Nav link */}
          <li>
            <NavLink>
              <MdDashboard /> Dashboard
            </NavLink>
          </li>
          {/* Nav link */}
          <li onClick={() => openModal()}>
            <NavLink>
              <FaList /> Application List
            </NavLink>
          </li>
          {/* Nav link */}
          <li onClick={() => setIsInnerLinkShow(!isInnerLinkShow)}>
            <NavLink to={"/inventory"}>
              <MdInventory size={18} /> Inventory{" "}
              <>{isInnerLinkShow ? <IoIosArrowUp /> : <IoIosArrowDown />}</>
            </NavLink>
            <ul
              style={{ display: `${isInnerLinkShow ? "block" : "none"}` }}
              className="inventoryInnerLinks"
            >
              <li
                onClick={(e) => {
                  e.stopPropagation();
                  addProductClick();
                }}
              >
                <NavLink to={"/inventory"}> Add Products</NavLink>
              </li>
              <li
                onClick={(e) => {
                  e.stopPropagation();
                  viewProductsClick();
                }}
              >
                <NavLink to={"/inventory"}> View Products</NavLink>
              </li>
            </ul>
          </li>
          {/* Nav link */}
          <li>
            <NavLink to={"/createRole"}>
              <FaUserShield size={20} /> Create Role
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard menu */}
    </div>
    // dashboard sidebar
  );
};

export default DashBoardSideBar;
