import React from "react";
import CvAside from "./CvAside";
import CvFooter from "./CvFooter";
import CvHeader from "./CvHeader";
import CvMain from "./CvMain";

const Cv = () => {
  return (
    <div className="flex flex-col gap-3 mx-5 border-solid rounded-lg border-4 border-white ">
      <CvHeader />
      <div className="flex sm:flex-row -mx-[63px] flex-col justify-around items-center">
        <CvAside />
        <CvMain />
      </div>
      <CvFooter />
    </div>
  );
};

export default Cv;
