"use client";

import React from "react";
import { Card, CardHeader, CardBody, Button, Link } from "@nextui-org/react";
import { PencilIcon } from "@heroicons/react/20/solid";

const CharityHomepageJobs = (charityJob) => {
  console.log("Homepage component Jobs", charityJob);
  return (
    <Card key={charityJob} className="w-96 h-90 m-2 justify-center">
      <CardHeader className="absolute top-1 flex-col items-start"></CardHeader>
      <div className="mb-10">
        <CardBody className="flex justify-between">
          <p className="text-large flex justify-left text-left w-[100px]">
            {charityJob.charityJob.title}
            <Button
              as={Link}
              href={`/charity/editjob/${charityJob.charityJob.id}`}
              className=" w-[10px] h-[30px] left-[150px]"
            >
              <PencilIcon />
            </Button>
            <Button
              as={Link}
              href={`/charity/jobapplications/${charityJob.charityJob.id}`}
              className=" w-[10px] h-[30px] left-[140px] absolute"
            >
              <PencilIcon />
            </Button>
          </p>

          <br></br>
          <p className="text-md">{charityJob.charityJob.description}</p>
          <br></br>
          <br></br>
          <p className="text-md">{charityJob.charityJob.location}</p>
        </CardBody>
      </div>
    </Card>
  );
};

export default CharityHomepageJobs;
