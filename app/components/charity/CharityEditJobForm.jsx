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

const CharityEditPage = () => {
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
    <div className="flex flex-wrap justify-center p-5">
      {charityJobs.map((charityJobs, index) => (
        <>
          <Card key={index} className="w-96 h-90 m-2">
            <CardHeader className="absolute top-1 flex-col items-start"></CardHeader>
            <CardBody>
              <p className="text-large text-center">{charityJobs.title}</p>
              <br></br>
              <p className="text-md">{charityJobs.desc}</p>
              <br></br>
              <br></br>
              <p className="text-md">{charityJobs.location}</p>

              <Button
                onPress={onOpen}
                className="flex flex-col gap-2 p-2 m-5 text-foreground border-default-300"
                color="warning"
                size="lg"
              >
                EDIT
              </Button>
              <form>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">
                          <center>Edit Job Information</center>
                        </ModalHeader>
                        <ModalBody>
                          <p>Job Title:</p>
                          <Textarea
                            className="w-full"
                            value={charityJobs.title}
                          />
                          <p>Job Description:</p>
                          <Textarea
                            className="w-full"
                            value={charityJobs.desc}
                          />
                          <p>Job Location:</p>
                          <Textarea
                            className="w-full"
                            value={charityJobs.location}
                          />
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color="primary"
                            variant="light"
                            onPress={onClose}
                          >
                            Close
                          </Button>
                          <Button
                            color="primary"
                            variant="light"
                            onPress={onClose}
                          >
                            Update
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </form>
              <Button
                className={"flex flex-wrap m-5 border-default-300 text-white"}
                color="danger"
                size="lg"
              >
                DELETE
              </Button>
            </CardBody>
          </Card>
        </>
      ))}
    </div>
  );
};

export default CharityEditPage;
