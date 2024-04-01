"use client";
import { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { getSignedURL } from "@/lib/actions/fileActions";
import { DocumentArrowUpIcon } from "@heroicons/react/20/solid";
import { Button, Input } from "@nextui-org/react";

const UploadCV = (user) => {
  const [file, setFile] = useState(undefined);
  const [fileUrl, setFileUrl] = useState("");
  const [fileName, setFileName] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  //Hash function to ensure integrity of the file
  const computeSHA256 = async (file) => {
    const buffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // Do all the image upload and everything
    try {
      if (file) {
        setStatusMessage("uploading...");
        const checksum = await computeSHA256(file);
        const signedURLResult = await getSignedURL(
          file.type,
          file.size,
          checksum,
          fileName
        );

        if (signedURLResult.failure !== undefined) {
          setStatusMessage("failed");
          throw new Error(signedURLResult.failure);
        }

        const { url, cvId } = signedURLResult.success;
        await fetch(url, {
          method: "PUT",
          body: file,
          headers: {
            "Content-Type": file.type,
          },
        });
      }
    } catch (error) {
      setStatusMessage("failed");
      console.log("error", error);
    } finally {
      setStatusMessage("success");
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setFileName(file.name);
    if (fileUrl) {
      URL.revokeObjectURL(fileUrl);
    }
    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
    } else {
      setFileUrl(undefined);
    }
  };
  return (
    <>
      <h1 className="text-center m-2">Upload CV</h1>
      <form
        className={`grid ${
          file ? "grid-cols-5" : "grid-cols-3"
        } gap-3 p-2 shadow border rounded-md p-5 m-2 items-center justify-center`}
        onSubmit={handleSubmit}
      >
        {statusMessage && (
          <div className="col-span-5 text-center">
            <p
              className={`${
                statusMessage == "success"
                  ? "bg-green-100 border border-green-400 text-green-700"
                  : "bg-yellow-100 border border-yellow-400 text-yellow-700"
              } px-4 py-3 mb-4 rounded relative col-span-1`}
            >
              {statusMessage}
            </p>
          </div>
        )}
        <Input
          className="col-span-1"
          type="text"
          placeholder="Enter File Name"
          value={fileName}
          name="Enter File Name"
          onChange={(e) => setFileName(e.target.value)}
        ></Input>

        {fileUrl && file && (
          <>
            <div className="align-items text-center justify-center mt-2">
              {file.name}
            </div>
            <button
              type="button"
              className="border rounded-xl px-4 py-2 float-end"
              onClick={() => {
                setFile(undefined);
                setFileUrl(undefined);
              }}
            >
              Remove
            </button>
          </>
        )}
        <label className="flex col-span-1 items-center justify-center">
          <input
            className="bg-transparent flex-1 border-none outline-none hidden"
            name="cv"
            type="file"
            accept="pdf"
            onChange={handleChange}
          />
          <span className="">Select CV</span>
          <DocumentArrowUpIcon className="w-6" />
        </label>
        <Button type="submit" className="">
          Upload
        </Button>
      </form>
    </>
  );
};
export default UploadCV;
