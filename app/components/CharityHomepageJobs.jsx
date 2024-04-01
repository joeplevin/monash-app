"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Link,
  User,
  Tooltip,
} from "@nextui-org/react";
import { PencilIcon } from "@heroicons/react/20/solid";
import { UserGroupIcon } from "@heroicons/react/20/solid";

const CharityHomepageJobs = (charityJob, skill) => {
  console.log("Homepage component Jobs", charityJob);
  console.log("Homepage component Skills", skill);
  return (
    <Card key={charityJob} className="w-96 h-90 m-2 justify-center">
      <CardHeader className="absolute top-1 flex-col items-start"></CardHeader>
      <div className="mb-10">
        <CardBody className="flex justify-between">
          <p className="text-large flex justify-left text-left w-[100px]">
            {charityJob.charityJob.title}
            <Tooltip content="Edit Job" placement="top">
              <Button
                as={Link}
                href={`/charity/editjob/${charityJob.charityJob.id}`}
                className=" w-[10px] h-[30px] left-[150px]"
                color="success"
              >
                <PencilIcon />
              </Button>
            </Tooltip>
            <Tooltip content="View Job Applications" placement="top">
              <Button
                as={Link}
                href={`/charity/jobapplications/`}
                className=" w-[10px] h-[30px] left-[140px] absolute"
              >
                <UserGroupIcon />
              </Button>
            </Tooltip>
          </p>

          <br></br>
          <p className="text-md">{charityJob.charityJob.description}</p>
          <br></br>
          <p className="text-md">{charityJob.charityJob.location}</p>
          <br></br>
          <p className="text-md">Skills:</p>
        </CardBody>
      </div>
    </Card>
  );
};

export default CharityHomepageJobs;
