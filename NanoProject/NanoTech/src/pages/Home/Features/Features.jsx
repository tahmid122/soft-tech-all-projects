import React from "react";
import "./features.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Card from "./Card/Card";
import { MdStackedBarChart } from "react-icons/md";
import { FaBookOpen, FaDollarSign, FaEye, FaUser } from "react-icons/fa6";
import { HiDocumentReport } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaTools,
  FaClock,
  FaCreditCard,
  FaHandHoldingUsd,
} from "react-icons/fa";
import useLanguage from "../../../hooks/useLanguage";

// Features cards data

// Features cards data
const Features = () => {
  const { language } = useLanguage();
  const lang = language === "bangla";
  const cards = [
    {
      icon: <FaShieldAlt size={30} style={{ color: "#0ea5e9" }} />,
      title:
        language === "bangla" ? "মানসম্মত পন্যের নিশ্চয়তা" : "Quality product",
      description:
        language === "bangla"
          ? "আন্তর্জাতিক মান অনুযায়ী পরীক্ষিত পণ্য, যা দীর্ঘদিন ব্যবহার উপযোগীএবং বিশ্বস্ত।"
          : "Products tested according to international standards, which are long-lasting and reliable.",
      color: "#DBF4FF",
    },
    {
      icon: <FaCheckCircle size={30} style={{ color: "#10b981" }} />,
      title: lang ? "টেকসই ও নির্ভরযোগ্য" : "Durable and reliable",
      description: lang
        ? "ন্যানো-টেক এর হোম অ্যাপ্লায়েন্স গুলো টেকসই, শক্তপোক্ত এবং পরিবারের জন্য নিরাপদ।"
        : "Nano-Tech's home appliances are durable, sturdy, and safe for the family.",
      color: "#D1FAE5",
    },
    {
      icon: <FaTools size={30} style={{ color: "#f59e0b" }} />,
      title: lang ? "দ্রুত ওয়ারেন্টি সাপোর্ট" : "Fast warranty support",
      description: lang
        ? "ওয়ারেন্টির আওতাভুক্ত যেকোনো সমস্যায় সর্বচ্চ ৭ কর্মদিবসের মধ্যে সার্ভিসের নিশ্চয়তা।"
        : "Service is guaranteed within a maximum of 7 working days for any issue covered by the warranty.",
      color: "#FEF3C7",
    },
    {
      icon: <FaEye size={30} style={{ color: "#6366f1" }} />,
      title: lang ? "আকর্ষনীয় ডিজাইন" : "Attractive design",
      description: lang
        ? "আধুনিক ও স্টাইলিশ ডিজাইনে তৈরি আমাদের পণ্যসমূহ আপনার ঘরের শোভা বাড়াবে এবং প্রথম দেখাতেই নজর কাড়বে।"
        : "Our products, made with modern and stylish designs, will enhance the beauty of your home and will catch the eye at first sight.",
      color: "#E0E7FF",
    },
    {
      icon: <FaCreditCard size={30} style={{ color: "#22c55e" }} />,
      title: lang ? "সহজ কিস্তি সুবিধা" : "Easy installment facility",
      description: lang
        ? "ব্যাংক ছাড়াই ক্রেতারা ৩ থেকে ৬ মাসের সহজ কিস্তিতে পণ্য কিনতে পারবেন।"
        : "Without a bank, buyers can purchase products in easy installments of 3 to 6 months.",
      color: "#DCFCE7",
    },
    {
      icon: <FaHandHoldingUsd size={30} style={{ color: "#a855f7" }} />,
      title: lang ? "সাশ্রয়ী মূল্য ও অফার" : "Affordable prices and offers",
      description: lang
        ? "ন্যানো-টেক আপনাকে দিচ্ছে প্রতিযোগিতামূলক মূল্য এবং নগদ ক্রয়ে আকর্ষণীয় ডিসকাউন্ট অফার।"
        : "Nano-Tech offers you competitive prices and attractive discount offers on cash purchases.",
      color: "#F3E8FF",
    },
  ];

  return (
    <section className="feature-bg">
      <section className="global-width">
        {/* section title component */}
        <SectionTitle
          title={
            language === "bangla"
              ? "কেন আমাদের পন্যই সেরা?"
              : "Why are our products the best?"
          }
          // description={
          //   "Explore the powerful features of Nano-Tech Production Technology that simplify your accounting, save time, and help your business grow smarter every day."
          // }
        />
        {/* section title component */}
        {/* feature cards container */}
        <div className="card-container">
          {cards?.map((card, index) => (
            // features single card
            <Card key={index} card={card} />
            // features single card
          ))}
          {/* feature cards container */}
        </div>
      </section>
    </section>
  );
};

export default Features;
