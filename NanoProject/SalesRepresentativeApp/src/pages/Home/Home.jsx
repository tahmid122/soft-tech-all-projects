import React from "react";
import "./home.css";
import Reels from "./Reels/Reels";
import Posts from "./Posts/Posts";
const Home = () => {
  return (
    <main>
      <Reels />
      <Posts />
    </main>
  );
};

export default Home;
