import { NavLink } from "react-router-dom";
import { FaHome, FaFileCode } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { RiQuestionnaireFill } from "react-icons/ri";

import { logoHeader } from "../assets";

const Navbar = () => {
  return (
    <nav className="w-full flex sm:p-8 px-4 gap-4 justify-between items-center mt-12 bg-red h-[19.8vh]">
      <img src={logoHeader} alt="Luth-Badila" className="mb-2 flex items-center sm:w-[200px] sm:h-[80px] w-[80px]" />
      <ul className="list-none text-white flex mt-8 sm:mt-0 justify-end items-center gap-6">
        <li className={`font-poppins font-normal cursor-pointer hover:text-redHover`}>
          <NavLink to="/" className="flex flex-col items-center gap-1 sm:text-xl text-xs sm:mb-0 mb-11">
            <FaHome className="sm:flex hidden" size={50} />
            <p>Home</p>
          </NavLink>
        </li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-redHover`}>
          <NavLink to="/portofolio" className="flex flex-col gap-1 sm:text-xl text-xs items-center sm:mb-0 mb-11">
            <FaFileCode className="sm:flex hidden" size={50} />
            Portofolio
          </NavLink>
        </li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-redHover`}>
          <NavLink to="/contact" className="sm:text-xl text-xs sm:mb-0 mb-11 flex flex-col items-center gap-1">
            <MdContacts className="sm:flex hidden" size={50} />
            Contact
          </NavLink>
        </li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-redHover`}>
          <NavLink to="/whymakewebsite" className="sm:text-xl text-xs sm:mb-0 mb-11 flex flex-col items-center gap-1">
            <RiQuestionnaireFill className="sm:flex hidden" size={50} />
            Why Make Website ?
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
