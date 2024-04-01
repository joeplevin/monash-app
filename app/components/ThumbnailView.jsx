"use client";
import { pdfjs, Document, Page, Thumbnail } from "react-pdf";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const ThumbnailView = (url) => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <div className="justify-center items-center max-h-9">
        <Document
          file={url.cvUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          className={"justify-center items-center max-h-9"}
        >
          <Thumbnail pageNumber={pageNumber} />
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

export default ThumbnailView;
