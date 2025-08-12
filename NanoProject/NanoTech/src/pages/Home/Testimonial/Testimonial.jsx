import React from "react";
import "./testimonial.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaPlay, FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import Slider from "./SliderCarousel";
import SliderCarousel from "./SliderCarousel";
import useLanguage from "../../../hooks/useLanguage";
const Testimonial = () => {
  const { language } = useLanguage();
  const lang = language === "bangla";
  return (
    <section id="testimonial" className="feature-bg">
      <section className="global-width">
        <SectionTitle
          title={lang ? "আমাদের ব্যবহারকারীরা কি বলে" : "What Our Users Say"}
          description={
            lang
              ? "ন্যানো-টেক সারা দেশের ব্যবসায়ীদের কাছে বিশ্বস্ত। শুনুন এটি কীভাবে প্রতিদিন কেনাকাটা সহজ করে তুলছে।"
              : "Nano-Tech is trusted by businesses across the country.Hear how it’s making shopping easier every day."
          }
        />
        <div className="slider">
          <SliderCarousel />
        </div>
      </section>
    </section>
  );
};

export default Testimonial;
