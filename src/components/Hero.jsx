import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Import modules
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Hero.css";

// Importing images
import logo from "../assets/iit-bombay.jpg";
import bgphy from "../assets/bg-phy.png";
import newl from "../assets/Newsletter.png";

function Hero() {
  const swiperRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "Students' Association, Physics Department",
      description:
        "Physics is not about things, it is about the relationships between things.",
      image: bgphy,
    },
    {
      id: 2,
      title: "Department Newsletter Spring '25",
      description: "Explore the latest issue of the department newsletter!",
      image: newl,
      button:
        "https://drive.google.com/file/d/1A1evVXw1pgCOiRcV-SoyUFD3vjCqG7uZ/view",
    },
    {
      id: 3,
      title: "",
      description: "",
      image: logo,
    },
  ];

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext(); // Move to next slide, loops automatically
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev(); // Move to previous slide, loops automatically
    }
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Swiper Component */}
      <Swiper
        ref={swiperRef}
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination", // Attach to our custom div
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center relative flex justify-center items-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "86.5vh",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50" />
              <div className="relative z-10 text-center max-w-2xl ">
                <h1 className="text-2xl pb-2 sm:text-4xl md:text-5xl lg:text-6xl font-bold text-outline">
                  {slide.title}
                </h1>
                <p className="text-200 mt-4 sm:text-xl md:text-2xl lg:text-3xl text-outline">
                  {slide.description}
                </p>
                {slide.button && (
                  <a
                    href={slide.button}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bottom-6 text-xm mt-4 sm:text-lg md:text-xl lg:text-2xl inline-block text-black bg-white py-2 px-4 rounded-lg hover:bg-red-400 transition-all duration-300"
                  >
                    Read Here
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div
        onClick={handlePrev}
        className="custom-prev text-white bg-red-600 flex items-center justify-center rounded-full md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6  absolute bottom-1/4 left-5 transform -translate-y-1/2 cursor-pointer z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </div>
      <div
        onClick={handleNext}
        className="custom-next text-white bg-red-600 flex items-center justify-center rounded-full md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6 absolute bottom-1/4 right-5 transform -translate-y-1/2 cursor-pointer z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>

      {/* Custom Pagination Dots */}
      <div className="absolute bottom-6 w-full flex justify-center">
        <div className="custom-pagination swiper-pagination"></div>{" "}
        {/* Swiper pagination container */}
      </div>
    </section>
  );
}

export default Hero;
