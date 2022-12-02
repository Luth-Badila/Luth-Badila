import React from "react";
import { Link } from "react-router-dom";
import CvAside from "./CvAside";
import CvFooter from "./CvFooter";
import CvHeader from "./CvHeader";
import CvMain from "./CvMain";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const Cv = ({ rootElementid, DownloadFileName }) => {
  const downloadFileDocument = () => {
    const input = document.getElementById(rootElementid);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4");
      pdf.addImage(imgData, "JPEG", 10, 50);
      pdf.save(`${DownloadFileName}`);
    });
  };

  return (
    <>
      <div className="flex flex-col gap-3 bg-white">
        <CvHeader />
        <div className="flex sm:flex-row flex-col gap-5 justify-start items-start">
          <CvAside />
          <CvMain />
        </div>
        <CvFooter />
      </div>
      <div className="flex flex-col justify-center items-center mt-5 text-white mb-5 gap-2">
        <h1 className="text-2xl font-bold">Or</h1>
        <Link href="">
          <button onClick={downloadFileDocument} className="p-2 bg-rose-900 rounded-md">
            Download
          </button>
        </Link>
      </div>
    </>
  );
};

export default Cv;
