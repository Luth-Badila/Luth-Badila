import { NavLink } from "react-router-dom";
import { FaHome, FaFileCode } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { RiQuestionnaireFill } from "react-icons/ri";

import { logoHeader } from "../assets";

const Navbar = () => {
  return (
    <nav className="w-full flex p-8 justify-between items-center navbar mt-12 bg-red h-[19.8vh]">
      <img src={logoHeader} alt="Luth-Badila" className="mb-2 flex items-center w-[200px] h-[80px]" />
      <ul className="list-none text-white flex mt-10 sm:mt-0 justify-end items-center gap-6">
        <li className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-redHover`}>
          <NavLink to="/" className="flex flex-col items-center gap-1 text-xl sm:mb-0 mb-11">
            <FaHome className="sm:flex hidden" size={50} />
            Home
          </NavLink>
        </li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-redHover`}>
          <NavLink to="/portofolio" className="flex flex-col gap-1 text-xl items-center sm:mb-0 mb-11">
            <FaFileCode className="sm:flex hidden" size={50} />
            Portofolio
          </NavLink>
        </li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-redHover`}>
          <NavLink to="/contact" className="text-xl sm:mb-0 mb-11 flex flex-col items-center gap-1">
            <MdContacts className="sm:flex hidden" size={50} />
            Contact
          </NavLink>
        </li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-redHover`}>
          <NavLink to="/whymakewebsite" className="text-xl sm:mb-0 mb-11 flex flex-col items-center gap-1">
            <RiQuestionnaireFill className="sm:flex hidden" size={50} />
            Why Make Website ?
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
