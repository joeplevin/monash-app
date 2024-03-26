"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import testData from "/lib/studentsData.json";
import testData2 from "/lib/charityjobcardData.json";
import { Link } from "@nextui-org/react";

const CharityApproval = () => {
  const [stnInfo] = useState(() => testData, []);
  const [charInfo] = useState(() => testData2, []);

  useEffect(() => {
    fetch("http://localhost:3000/studentsData.json")
      .then((res) => res.json())
      .then((jsonData) => SVGMetadataElement(jsonData));
  });

  const redirectbackDashboard = () => {
    window.location.href = "/CharityDashboardPage";
  };

  return (
    <>
      <br></br>
      <br></br>
      <Button
        as={Link}
        href="/charity"
        className="fixed top-13 right-4 text-white gap-2 rounded-lg"
        color="primary"
        size="lg"
      >
        Main Page
      </Button>
      <div className="flex flex-wrap justify-center p-5">
        {stnInfo.map((stnInfo, item) => (
          <>
            <Card key={item} className="w-96 h-90 m-2">
              <CardHeader className="absolute top-1 flex-col items-start"></CardHeader>
              <CardBody>
                <p className="text-large text-center">Applicant {stnInfo.id}</p>
                <br></br>
                <p className="text-md">First Name: {stnInfo.stdFn}</p>
                <br></br>
                <p className="text-md">Last Name: {stnInfo.stdLn}</p>
                <br />
                <p className="text-md">Skills: {stnInfo.stdSkills}</p>
                <br />
                <p className="text-md">Job Title: {charInfo[item].title}</p>
                <br />
              </CardBody>

              <Button
                className={
                  "flex flex-col gap-2 p-2 m-5 border-default-300 text-white"
                }
                color="success"
                size="lg"
              >
                Approve
              </Button>

              <Button
                className={
                  "flex flex-col gap-2 p-2 m-5 border-default-300 text-white"
                }
                color="danger"
                size="lg"
              >
                Reject
              </Button>
            </Card>
          </>
        ))}
      </div>
    </>
  );
};

export default CharityApproval;
