import React from "react";
import "./success.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useLanguage from "../../../hooks/useLanguage";

const Success = () => {
  const { language } = useLanguage();
  const lang = language === "bangla";
  const cards = [
    {
      count: lang ? "৪৩০০" : 4300,
      // unit: "K",
      tag: lang ? "মোট পন্য" : "Total Products",
      color: "green",
    },
    {
      count: lang ? "৩৭০০" : 3700,
      // unit: "K",
      tag: lang ? "মোট বিক্রয় পয়েন্ট" : "Total Sales Points",
      color: "red",
    },
    {
      count: lang ? "৪৮০০" : 4800,
      // unit: "M",
      tag: lang ? "মোট বিক্রিত পন্য" : "Total Products Sold",
      color: "orange",
    },
    {
      count: lang ? "৯৯%" : "99%",
      // unit: "K",
      tag: lang ? "গ্রাহক সন্তুষ্টি" : "Customer Satisfaction",
      color: "#F6339A",
    },
  ];
  return (
    // Success section
    <section id="success" className="success-bg">
      <section className="global-width">
        {/* section title */}
        <SectionTitle
          title={
            lang
              ? "এক নজরে ন্যানো-টেক প্রডাকশন টেকনোলজি"
              : "Nano-Tech Production Technology at a glance"
          }
        />
        {/* section title */}
        {/* Cards container */}
        <div className="success-cards">
          {cards?.map((card, index) => (
            // single cards
            <div className="success-card" key={index}>
              <h1>{card.count}</h1>

              {/* <h1 className="count" style={{ color: card.color }}>
                  {card.unit}
                </h1> */}
              <p style={{ color: card.color }}>{card.tag}</p>
            </div>
            // single cards
          ))}
        </div>
        {/* Cards container */}
      </section>
    </section>
    // Success section
  );
};

export default Success;
