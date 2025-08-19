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
              ? "সংখ্যায় ন্যানো-টেক উৎপাদন প্রযুক্তি"
              : "Nano-Tech Production Technology in Numbers"
          }
          description={
            lang
              ? "বিভিন্ন শিল্পের ব্যবসার দ্বারা বিশ্বস্ত - দেখুন আমরা কতদূর এসেছি।"
              : "Trusted by businesses across industries — see how far we've come."
          }
        />
        {/* section title */}
        {/* Cards container */}
        <div className="success-cards">
          {cards?.map((card, index) => (
            // single cards
            <div className="success-card" key={index}>
              <h1>{card.count}</h1>
              <div>
                {/* <h1 className="count" style={{ color: card.color }}>
                  {card.unit}
                </h1> */}
                <p style={{ color: card.color }}>{card.tag}</p>
              </div>
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
