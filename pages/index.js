"use client";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div
        style={{
          height: "100%",
          width: "100%", // Adjust the width as needed
          margin: "0 auto", // Center the viewer
        }}
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer fileUrl="/164932.pdf" />
        </Worker>
      </div>
    </div>
  );
}
