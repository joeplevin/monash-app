"use client";
import { pdfjs, Document, Page } from "react-pdf";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PDFView = (url) => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  console.log("cv Url PDF View", url.cvUrl);
  return (
    <>
      <div className="justify-center items-center">
        <Document file={url.cvUrl} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            pageNumber={pageNumber}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>
      </div>
      <div>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <p>CV title goes here</p>
      </div>
    </>
  );
};

export default PDFView;
