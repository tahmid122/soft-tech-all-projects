import React from "react";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import Services from "./Services/Services";
import Success from "./Success/Success";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <Services />
      <Testimonial />
      <Success />
    </div>
  );
};

export default Home;
