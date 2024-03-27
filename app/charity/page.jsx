"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  ModalFooter,
  Textarea,
} from "@nextui-org/react";
import testData from "/lib/charityjobcardData.json";
import { Link } from "@nextui-org/react";

const CharityHomePage = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  //Pulling data from a JSOn file (needs to be changed to a sql pull)
  const [charityJobs] = useState(() => testData, []);

  useEffect(() => {
    fetch("http://localhost:3000/charityjobcardData.json")
      .then((res) => res.json())
      .then((jsonData) => SVGMetadataElement(jsonData));
  });

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setCharityData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <h1>
        <center>
          <b>Charity Profile Jobs</b>
        </center>
      </h1>
      <br></br>
      <br></br>
      <div className="flex justify-center">
        <Card className=" flex flex-wrap justify-center p-5 w-[900px] h-[1000px] right-[40px]">
          <h1>
            <center>Your Charity</center>
          </h1>
          <div className="flex flex-wrap justify-center p-5">
            {charityJobs.map((charityJobs, index) => (
              <>
                <div className="flex flex-row justify-center w-[400px]">
                  <Card key={index} className="w-96 h-90 m-2 justify-center">
                    <CardHeader className="absolute top-1 flex-col items-start"></CardHeader>
                    <div className="mb-10">
                      <CardBody>
                        <p className="text-large text-center">
                          {charityJobs.title}
                        </p>
                        <br></br>
                        <p className="text-md">{charityJobs.desc}</p>
                        <br></br>
                        <br></br>
                        <p className="text-md">{charityJobs.location}</p>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </>
            ))}
          </div>
        </Card>
        <div className="flex justify-center">
          <Card className="flex flex-wrap justify-center p-5 w-[900px] h-[1000px] left-[40px] ">
            <h1>
              <center>Your Jobs</center>
            </h1>
            <div className="flex flex-wrap justify-center p-5">
              {charityJobs.map((charityJobs, index) => (
                <>
                  <div className="flex flex-row w-[400px] left-[900px]">
                    <Card key={index} className="w-96 h-90 m-2 justify-center">
                      <CardHeader className="absolute top-1 flex-col items-start"></CardHeader>
                      <div className="mb-10">
                        <CardBody>
                          <p className="text-large text-center">
                            {charityJobs.title}
                          </p>
                          <br></br>
                          <p className="text-md">{charityJobs.desc}</p>
                          <br></br>
                          <br></br>
                          <p className="text-md">{charityJobs.location}</p>
                        </CardBody>
                      </div>
                    </Card>
                  </div>
                </>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CharityHomePage;
