import React from "react";
import { logoHeader } from "../assets";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import { Link } from "react-router-dom";

const CvHeader = () => {
  return (
    <div className="flex flex-col gap-3 h-full  text-black justify-center items-center mb-3">
      <div className="flex">
        <img src={logoHeader} alt="profile photo" className="sm:w-[170px] sm:h-[80px] w-[80px]" />
      </div>
      <div className="flex sm:flex-row flex-col sm:gap-2 gap-0 items-center justify-center sm:text-lg text-md">
        <div className="flex items-center justify-center gap-1">
          <AiOutlineMail size={20} className="mt-1" />
          <p>FrancescoLutfi10@gmail.com</p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <AiOutlineWhatsApp size={20} className="mt-1" />
          <p>087856524677</p>
        </div>
        <div className="flex items-center justify-center gap-1">
          <TbBrandTelegram size={20} className="mt-1" />
          <p>087754786544</p>
        </div>
      </div>
    </div>
  );
};

export default CvHeader;
