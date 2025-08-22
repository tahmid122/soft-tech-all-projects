import React from "react";
import "./posts.css";
import SinglePost from "./SinglePost/SinglePost";
const Posts = () => {
  return (
    <section id="posts">
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <div className="postLimit">
        <p>No more posts..</p>
      </div>
    </section>
  );
};

export default Posts;
