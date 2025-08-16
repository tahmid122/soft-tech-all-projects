import React, { useState } from "react";
import "./dashBoardSideBar.css";
import { Link, NavLink } from "react-router";
import { FaTachometerAlt, FaListAlt } from "react-icons/fa";
import {
  MdDashboard,
  MdInventory,
  MdPointOfSale,
  MdStore,
} from "react-icons/md";
import { FaList, FaUserShield, FaWarehouse } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const DashBoardSideBar = ({
  openModal,
  addProductClick,
  viewProductsClick,
}) => {
  const [isInnerLinkShow, setIsInnerLinkShow] = useState(false);
  const [isInnerLinkShow2, setIsInnerLinkShow2] = useState(false);
  const [isInnerLinkShow3, setIsInnerLinkShow3] = useState(false);
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
            <NavLink to={"/dashboard"} end>
              <MdDashboard end /> Dashboard
            </NavLink>
          </li>
          {/* Nav link */}
          <li onClick={() => openModal()}>
            <a style={{ cursor: "pointer" }}>
              <FaList /> Application List
            </a>
          </li>
          {/* Nav link */}
          <li onClick={() => setIsInnerLinkShow(!isInnerLinkShow)}>
            <NavLink to={"e-commerce"} end>
              <MdPointOfSale size={18} /> E-commerce
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
                <NavLink to={"e-commerce"} end>
                  Add Products
                </NavLink>
              </li>
              <li
                onClick={(e) => {
                  e.stopPropagation();
                  viewProductsClick();
                }}
              >
                <NavLink to={"e-commerce"} end>
                  {" "}
                  View Products
                </NavLink>
              </li>
              <li
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <NavLink to={"Orders"} end>
                  {" "}
                  Orders
                </NavLink>
              </li>
            </ul>
          </li>
          {/* Nav link */}
          {/* Pending works */}
          <li onClick={() => setIsInnerLinkShow2(!isInnerLinkShow2)}>
            <NavLink to={"productManagement"}>
              <MdInventory size={18} /> Inventory
              <>{isInnerLinkShow2 ? <IoIosArrowUp /> : <IoIosArrowDown />}</>
            </NavLink>
            <ul
              style={{ display: `${isInnerLinkShow2 ? "block" : "none"}` }}
              className="inventoryInnerLinks"
            >
              <li
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <NavLink to={"productManagement"}> Product Management</NavLink>
              </li>
              <li
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <NavLink to={"productQrCode"}> Product QR Code</NavLink>
              </li>
            </ul>
          </li>
          {/* Nav link */}
          <li onClick={() => setIsInnerLinkShow3(!isInnerLinkShow3)}>
            <NavLink to={"salesReport"}>
              <MdStore size={18} /> Sales Points
              <>{isInnerLinkShow3 ? <IoIosArrowUp /> : <IoIosArrowDown />}</>
            </NavLink>
            <ul
              style={{ display: `${isInnerLinkShow3 ? "block" : "none"}` }}
              className="inventoryInnerLinks"
            >
              <li
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <NavLink to={"salesReport"}> Sales Report</NavLink>
              </li>
              <li
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <NavLink to={"lowStockAlerts"}> Low Stock Alert</NavLink>
              </li>
            </ul>
          </li>
          {/* Nav link */}
          <li>
            <NavLink to={"createRole"}>
              <FaUserShield size={20} /> Create Role
            </NavLink>
          </li>
          {/* Nav link */}
          <li>
            <NavLink to={"warehouse"}>
              <FaWarehouse size={20} />
              Warehouse
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
