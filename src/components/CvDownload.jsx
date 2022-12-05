import React from "react";
import { Link } from "react-router-dom";

const CvDownload = ({ downloadFileDocument }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div className="text-white text-2xl">
        <p>Hello My Name Is Muhammad Lutfi Badila</p>
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
