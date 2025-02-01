// components/PdfViewer.js
import React from "react";
import { Document, Page } from "@react-pdf/renderer";

const PdfViewer = ({ pdfFile }) => {
  return (
    <Document file={pdfFile}>
      <Page />
    </Document>
  );
};

export default PdfViewer;
