import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div>
    <div>
      <img src="" alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
  </div>
);

const Business = () => {
  return (
    <div>
      <section id="features" className={`${layout.section}`}>
        <div className={`${layout.sectionInfo}`}>
          <h2 className={`${styles.heading2} capitalize`}>
            get more profit <br className="sm:block hidden" /> by creating a website
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>We lead you to grow and achieve more profit by creating a website that makes your work and life easier</p>
          <Button styles="mt-10" />
        </div>
        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Business;
