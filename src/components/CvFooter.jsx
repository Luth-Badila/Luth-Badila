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
      <div className="flex sm:flex-row flex-col gap-5">
        <NavLink href="" className="flex gap-2">
          <BsGithub size={30} />
          <p>Luth Badila</p>
        </NavLink>
        <NavLink href="" className="flex gap-2">
          <GrLinkedin size={30} />
          <p>Muhammad Lutfi Badila</p>
        </NavLink>
        <NavLink href="" className="flex gap-2">
          <BsInstagram size={30} />
          <p>Muhammad Lutfi Badila</p>
        </NavLink>
        <NavLink href="" className="flex gap-2">
          <RiFacebookBoxFill size={30} />
          <p>Muhammad Lutfi Badila</p>
        </NavLink>
      </div>
    </div>
  );
};

export default CvFooter;
