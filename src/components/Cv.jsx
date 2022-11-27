import React from "react";
import { logoHeader } from "../assets";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";

const Cv = () => {
  return (
    <div className="flex h-full border-solid rounded-lg text-white border-4 border-white justify-around items-center mx-5">
      <div className="flex bg-blue-800">
        <img src={logoHeader} alt="profile photo" className="sm:w-[170px] sm:h-[80px] w-[80px]" />
      </div>
      <div className="text-2xl">
        <div className="flex gap-2 items-center">
          <div className="flex items-center gap-2">
            <AiOutlineMail />
            <p>FrancescoLutfi10@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineWhatsApp />
            <p>087856524677</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <TbBrandTelegram />
            <p>087754786544</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cv;
