import React, { useState } from "react";
import "./reels.css";
import SingleReels from "./SingleReels/SingleReels";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaXmark } from "react-icons/fa6";
const Reels = () => {
  const [reelImage, setReelImage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="reels" className="marginBottom">
      <Swiper
        // modules={[Navigation]}
        // navigation
        spaceBetween={10}
        slidesPerView={2}
        slidesPerGroup={1}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          728: {
            slidesPerView: 5,
          },
          992: {
            slidesPerView: 6,
          },
        }}
        className="mySwiper"
      >
        {/* single reels */}
        <SwiperSlide>
          <SingleReels setIsOpen={setIsOpen} setReelImage={setReelImage} />
        </SwiperSlide>
        {/* single reels */}
        <SwiperSlide>
          <SingleReels setIsOpen={setIsOpen} setReelImage={setReelImage} />
        </SwiperSlide>
        {/* single reels */}
        <SwiperSlide>
          <SingleReels setIsOpen={setIsOpen} setReelImage={setReelImage} />
        </SwiperSlide>
        {/* single reels */}
        <SwiperSlide>
          <SingleReels setIsOpen={setIsOpen} setReelImage={setReelImage} />
        </SwiperSlide>
        {/* single reels */}
        <SwiperSlide>
          <SingleReels setIsOpen={setIsOpen} setReelImage={setReelImage} />
        </SwiperSlide>
        {/* single reels */}
        <SwiperSlide>
          <SingleReels setIsOpen={setIsOpen} setReelImage={setReelImage} />
        </SwiperSlide>
        {/* single reels */}
        <SwiperSlide>
          <SingleReels setIsOpen={setIsOpen} setReelImage={setReelImage} />
        </SwiperSlide>
        {/* single reels */}
        <SwiperSlide>
          <SingleReels setIsOpen={setIsOpen} setReelImage={setReelImage} />
        </SwiperSlide>
        {/* single reels */}
        <SwiperSlide>
          <SingleReels setIsOpen={setIsOpen} setReelImage={setReelImage} />
        </SwiperSlide>
      </Swiper>
      {/* full reel view container */}
      <div
        className="reelFullView"
        style={{ display: `${isOpen ? "block" : "none"}` }}
      >
        <span onClick={() => setIsOpen(false)} className="closeReelFullView">
          <FaXmark size={22} />
        </span>
        <img src={reelImage} alt="reelsTitle" />
      </div>
    </section>
  );
};

export default Reels;
