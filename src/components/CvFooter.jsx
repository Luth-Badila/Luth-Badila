import React from "react";
import { NavLink } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { RiFacebookBoxFill } from "react-icons/ri";

const CvFooter = () => {
  return (
    <div className="text-black flex flex-col gap-3 items-center justify-center mb-3">
      <h1 className="font-bold text-lg">Social Media</h1>
      <div className="flex gap-5">
        <NavLink href="" className="flex gap-2 justify-center items-center">
          <BsGithub size={30} />
          <p className="text-[10px]">Luth Badila</p>
        </NavLink>
        <NavLink href="" className="flex gap-2 justify-center items-center">
          <GrLinkedin size={30} />
          <p className="text-[10px]">Muhammad Lutfi Badila</p>
        </NavLink>
        <NavLink href="" className="flex gap-2 justify-center items-center">
          <BsInstagram size={30} />
          <p className="text-[10px]">Muhammad Lutfi Badila</p>
        </NavLink>
        <NavLink href="" className="flex gap-2 justify-center items-center">
          <RiFacebookBoxFill size={30} />
          <p className="text-[10px]">Muhammad Lutfi Badila</p>
        </NavLink>
      </div>
    </div>
  );
};

export default CvFooter;
