import React from "react";
import "./success.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useLanguage from "../../../hooks/useLanguage";

const Success = () => {
  const { language } = useLanguage();
  const lang = language === "bangla";
  const cards = [
    {
      count: lang ? "৪.৩" : 4.3,
      unit: "K",
      tag: lang ? "পন্যসমূহ" : "Products",
      color: "green",
    },
    {
      count: lang ? "৩.৭" : 3.7,
      unit: "K",
      tag: lang ? "বিক্রয় পয়েন্ট" : "Sales Points",
      color: "red",
    },
    {
      count: lang ? "৪.৮" : 4.8,
      unit: "M",
      tag: lang ? "মোট বিক্রয়" : "Total Sales",
      color: "orange",
    },
    {
      count: lang ? "২.৯" : 2.9,
      unit: "K",
      tag: lang ? "খুশি গ্রাহকরা" : "Happy Customers",
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
                <h1 className="count" style={{ color: card.color }}>
                  {card.unit}
                </h1>
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
