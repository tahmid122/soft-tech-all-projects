import React from "react";
import { Outlet } from "react-router";
import TopNavBar from "../components/TopNavBar/TopNavBar";
import MainNavBar from "../components/MainNavBar/MainNavBar";

const RootLayout = () => {
  return (
    <div>
      <TopNavBar />
      <MainNavBar />
      <div id="mainContainer">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
