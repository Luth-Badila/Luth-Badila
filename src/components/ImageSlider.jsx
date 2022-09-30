import React, { useState, useEffect, useRef } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

import styles from "../style";

let count = 0;
let slideInterval;
const ImageSlider = ({ Slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = Slides.length;
  const slideRef = useRef();
  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };
  const pauseSlider = () => {
    clearInterval(slideInterval);
  };
  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 5000);
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  if (!Array.isArray(Slides) || Slides.length <= 0) {
    return null;
  }

  const handleOnNextClick = () => {
    count = (count + 1) % Slides.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = Slides.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  return (
    <>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        {Slides.map((slide, i) => {
          return (
            <div ref={slideRef} key={i} className={i === currentIndex ? "opacity-[1] ease-in duration-1000" : "opacity-0"}>
              {/* <FaArrowCircleLeft onClick={handleOnPrevClick} size={35} className="absolute top-[50%] left-[20px] hover:text-white rounded-full text-white/70 cursor-pointer select-none z-[100] hover:text-red-700 p-2" /> */}
              {i === currentIndex && <img src={slide.photo} alt="porto image" className="lg:w-[90%] lg:h-[90%] lg:px-0 px-4 w-[100%] h-[100%] relative z-[5]" />}
              {/* <FaArrowCircleRight onClick={handleOnNextClick} size={35} className="absolute top-[50%] rounded-full right-[90px] text-white/70 hover:text-white cursor-pointer select-none z-[100] hover:text-red-700 p-2" /> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageSlider;
