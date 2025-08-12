import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { FaRegMessage } from "react-icons/fa6";
import CommentModal from "./commentModal/CommentModal";
const SinglePost = () => {
  //modal
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="singlePost" className="marginBottom">
      <div className="postTop marginBottom">
        <div className="ptImage">
          <img src="/logo.png" alt="post company image" />
        </div>
        <div className="ptDes">
          <h4>Welcome to nanoTech</h4>
          <p>12/12/2012 | 12:45</p>
        </div>
      </div>
      <div className="postDetails marginBottom">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          similique repellat laudantium amet illum! Consequatur sint quidem,
          culpa, reprehenderit expedita consectetur voluptatibus tenetur labore
          earum, sequi perferendis similique hic dicta!
        </p>
      </div>
      <div className="postMedia">
        <Swiper
          modules={[Navigation]}
          navigation
          loop={true}
          className="mySwiper"
        >
          {/* single images */}
          <SwiperSlide>
            <img
              src="https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <p className="totalPostComment" onClick={() => setIsOpen(true)}>
        425 comments
      </p>
      <div className="postComment">
        <button onClick={() => setIsOpen(true)}>
          <FaRegMessage />
          মতামত দিন
        </button>
      </div>
      <div className="postCommentBox">
        <CommentModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default SinglePost;
