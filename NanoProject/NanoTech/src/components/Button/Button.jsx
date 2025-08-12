import React from "react";
import "./button.css";
import { Link } from "react-router";

const Button = ({ text, link, onclick }) => {
  return (
    <>
      {link ? (
        <Link to={link}>
          <button className="btn">{text}</button>
        </Link>
      ) : (
        <button onClick={onclick} className="btn">
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
