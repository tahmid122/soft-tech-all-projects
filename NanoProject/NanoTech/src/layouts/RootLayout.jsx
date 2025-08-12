import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { ThemeContext } from "../contexts/Theme/ThemeContext";
const html = document.getElementsByTagName("html")[0];
const RootLayout = () => {
  const themeMode = localStorage.getItem("theme");
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(themeMode);
  useEffect(() => {
    if (themeMode === "dark") {
      html.id = "dark";
    } else {
      html.id = "";
    }
  }, [themeMode, theme]);
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
