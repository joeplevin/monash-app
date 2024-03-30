"use client";

import React from "react";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

const CharityApproval = (jobApplications) => {
  console.log("Charity Approval", jobApplications);
  console.log(
    "Students Job Applications",
    jobApplications.jobApplications[0].student
  );
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
        <>
          <Card className="w-96 h-90 m-2">
            <CardHeader className="absolute top-1 flex-col items-start"></CardHeader>
            <CardBody>
              <br></br>
              <p className="text-md">
                First Name:
                {jobApplications.jobApplications[0].student.user.firstName}
              </p>
              <br></br>
              <p className="text-md">
                Last Name:
                {jobApplications.jobApplications[0].student.user.lastName}
              </p>
              <br />
              <p className="text-md">
                CV: {jobApplications.jobApplications[0].student.user.email}
              </p>
              <br />
              <p className="text-md">CV: </p>
              <br />
              <p className="text-md">Skills: </p>
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
      </div>
    </>
  );
};

export default CharityApproval;
