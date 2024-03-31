"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

const JobsList = ({ jobs }) => {
  console.log("JobsList", jobs);
  return (
    <>
      {jobs.map((job) => (
        <Card
          key={job}
          className="col-span-1 m-2 p-2 text-center items-center justify-center min-h-52"
        >
          <CardHeader className="justify-center">{job.title}</CardHeader>
          <CardBody className="text-center">
            <div>{job.location}</div>
            <div>{job.charity.name}</div>
          </CardBody>
          <CardFooter className="justify-center">
            <Button>Apply</Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default JobsList;
