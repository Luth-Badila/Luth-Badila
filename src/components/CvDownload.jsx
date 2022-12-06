import React from "react";
import { Link } from "react-router-dom";
import { FiArrowDown } from "react-icons/fi";

const CvDownload = ({ downloadFileDocument }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div className="flex flex-col text-white text-2xl text-center items-center gap-1">
        <p>Hello My Name Is Muhammad Lutfi Badila</p>
        <p>If you want to hire me, please review my cv or download below</p>
        <FiArrowDown size={30} />
      </div>
      <Link href="">
        <button onClick={downloadFileDocument} className="p-2 bg-rose-900 rounded-md text-white">
          Download
        </button>
      </Link>
    </div>
  );
};

export default CvDownload;
