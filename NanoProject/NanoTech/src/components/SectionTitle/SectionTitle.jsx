import React from "react";
import "./sectionTitle.css";
const SectionTitle = ({ title, description }) => {
  return (
    // section title
    <div className="section-title">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default SectionTitle;
