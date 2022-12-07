import React from "react";
import CvAside from "./CvAside";
import CvFooter from "./CvFooter";
import CvHeader from "./CvHeader";
import CvMain from "./CvMain";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import CvDownload from "./CvDownload";

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
      pdf.addImage(imgData, "JPEG", 10, 10);
      // Margin lines: A4 = inch width:8.25 / height:11.75
      // pdf.line(x, y, width, height);
      pdf.setDrawColor("white");
      pdf.setLineWidth(1 / 72);
      pdf.line(0.5, 0.5, 0.5, 11.25);
      pdf.line(7.75, 0.5, 7.75, 11.25);

      // Break the long text
      // textlines = pdf.setFont("Arial").setFontSize(12).splitTextToSize(rootElementid, 7.25);
      pdf.save(`${DownloadFileName}`);
    });
  };

  return (
    <div className="flex lg:flex-row sm:flex-col flex-col gap-10 px-5">
      <div className="flex flex-col lg:w-[500px] sm:w-[740px] w-[350px] justify-center items-center text-white">
        <CvDownload downloadFileDocument={downloadFileDocument} />
      </div>
      <div className="flex flex-col gap-3 sm:w-[750px] w-full p-3 bg-white rounded-lg mb-5">
        <CvHeader />
        <div className="flex sm:flex-row flex-col gap-5 justify-start items-start">
          <CvAside />
          <CvMain />
        </div>
        <CvFooter />
      </div>
    </div>
  );
};

export default Cv;
