import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaPlay, FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import useLanguage from "../../../hooks/useLanguage";

const SliderCarousel = () => {
  const { language } = useLanguage();
  const lang = language === "bangla";
  const reviews = [
    {
      name: lang ? "মাহিনুর রহমান" : "Mahinur Rahman",
      image:
        "https://plus.unsplash.com/premium_photo-1691030254390-aa56b22e6a45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFuZ2xhZGVzaCUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
      description: lang
        ? "ন্যানো-টেক এর একজন কর্মকর্তা হিসেবে আমি নিজ এলাকায় স্মার্ট ব্যবসা শুরু করেছি সহজেই। ৭ দিনের মধ্যে ওয়ারেন্টি পরিষেবা ও কিস্তির সুবিধা আমাকে দারুণভাবে সাহায্য করেছে।"
        : "As an officer of Nano-Tech, I started a smart business in my area easily. The warranty service and installment facility within 7 days helped me a lot.",
      company: lang ? "জামালপুর প্রতিনিধি" : "Jamalpur Representative",
    },
    {
      name: lang ? "রহমান হোসেন" : "Rahman Hossen",
      image:
        "https://images.unsplash.com/photo-1694705157545-2890a070e859?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuZ2xhZGVzaCUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
      description: lang
        ? "কোম্পানির দেওয়া সফটওয়্যার, ট্যাবলেট ও ওয়েবসাইটের মাধ্যমে আমি আমার দোকানকে স্মার্ট শোরুমে পরিণত করেছি।"
        : "I turned my shop into a smart showroom with the software, tablet, and website provided by the company.",
      company: lang ? "সিরাজগঞ্জ প্রতিনিধি" : "Sirajganj Representative",
    },
    {
      name: lang ? "তানভির ইসলাম" : "Tanvir Islam",
      image:
        "https://images.unsplash.com/photo-1627821552667-9393b5aa5b82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJhbmdsYWRlc2glMjBtZW58ZW58MHx8MHx8fDA%3D",
      description: lang
        ? "নিয়মিত ট্রেনিং ও দ্রুত সাপোর্টের মাধ্যমে আমি দ্রুত গ্রাহক সেবা দিতে সক্ষম হয়েছি। বিক্রি উল্লেখযোগ্যভাবে বৃদ্ধি পেয়েছে।"
        : "Through regular training and prompt support, I have been able to provide prompt customer service. Sales have increased significantly.",
      company: lang ? "কুমিল্লা প্রতিনিধি" : "Cumilla Representative",
    },
    {
      name: lang ? "সাবির হোসেন" : "Sabir Hossen",
      image:
        "https://images.unsplash.com/photo-1714988179280-9daac290817c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJhbmdsYWRlc2glMjBtZW58ZW58MHx8MHx8fDA%3D",
      description: lang
        ? "ন্যানো-টেক এর সাথে ব্যবসা শুরু করা আমার জীবনের অন্যতম সেরা সিদ্ধান্ত। সফটওয়্যার, শোরুম সেটআপ ও প্রশিক্ষণ পেয়ে আমি সর্বোচ্চ প্রস্তুত ছিলাম।"
        : "Starting a business with Nano-Tech was one of the best decisions of my life. I was fully prepared with the software, showroom setup, and training.",
      company: lang ? "নরসিংদী প্রতিনিধি" : "Narshingdi Representative",
    },
  ];
  return (
    // Testimonial section
    <div className="slider-css">
      {/* Swiper.js slider */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        // navigation
        spaceBetween={20}
        slidesPerView={2}
        slidesPerGroup={1}
        autoplay={{
          delay: 2500,
        }}
        // loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 2,
          },
        }}
        className="mySwiper"
      >
        {/* single slide */}
        {reviews?.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="t-card-left">
                <img
                  className="shadow"
                  src={review.image}
                  alt="profile image"
                />
              </div>
              <div>
                <p className="quote">
                  <FaQuoteLeft size={20} color="#228b22" />
                  {review.description}
                  <FaQuoteRight size={20} color="#228b22" />
                </p>
                <div className="name-company">
                  <h3>- {review.name}</h3>
                  <p>{review.company}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* single slide */}
        {/* single slide */}

        {/* single slide */}
        {/* single slide */}
      </Swiper>
      {/* Swiper.js slider */}
    </div>
    // Testimonial section
  );
};

export default SliderCarousel;
