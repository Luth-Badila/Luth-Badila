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
      const pdf = new jsPDF({
        orientation: "p",
        unit: "mm",
        format: "a4",
        putOnlyUsedFonts: true,
        floatPrecision: 16,
      });
      pdf.addImage(imgData, "JPEG", 0, 0);
      // Margin lines: A4 = inch width:8.25 / height:11.75
      // pdf.line(x, y, width, height);
      pdf.setDrawColor("white");
      pdf.setLineWidth(1 / 72);
      pdf.line(0, 0, 0, 0);
      pdf.save(`${DownloadFileName}`);
    });
  };

  return (
    <>
      <div className="flex flex-col gap-3 mx-24 bg-white rounded-lg mb-5">
        <CvHeader downloadFileDocument={downloadFileDocument} />
        <div className="flex sm:flex-row flex-col gap-5 mx-10 justify-around items-center">
          <CvAside />
          <CvMain />
        </div>
        <CvFooter />
      </div>
    </>
  );
};

export default Cv;
