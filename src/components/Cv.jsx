import React from "react";
import { Link } from "react-router-dom";
import CvAside from "./CvAside";
import CvFooter from "./CvFooter";
import CvHeader from "./CvHeader";
import CvMain from "./CvMain";

const Cv = () => {
  return (
    <>
      <div className="flex flex-col gap-3 sm:mx-24 mx-10 border-solid rounded-lg border-4 border-white ">
        <CvHeader />
        <div className="flex sm:flex-row sm:-mx-[63px] mx-[20px] flex-col gap-5 sm:justify-around justify-center items-start">
          <CvAside />
          <CvMain />
        </div>
        <CvFooter />
      </div>
      <div className="flex flex-col justify-center items-center mt-5 text-white mb-5 gap-2">
        <h1 className="text-2xl font-bold">Or</h1>
        <Link href="">
          <button className="p-2 bg-rose-900 rounded-md">Download</button>
        </Link>
      </div>
    </>
  );
};

export default Cv;
