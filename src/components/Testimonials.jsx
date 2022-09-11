import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    {/* Gradient */}
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full red__gradient" />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>
        Lorem ipsum dolor
        <br className="sm:block hidden" /> sit amet consectetur
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos repudiandae cupiditate temporibus eius id.</p>
      </div>
    </div>
    <div className="flex flex-wrap justify-start sm:justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
