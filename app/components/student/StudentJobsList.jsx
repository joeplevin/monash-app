"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";

const StudentJobsList = ({ studentJobs }) => {
  return (
    <>
      {studentJobs.map((job) => (
        <Card
          key={job}
          className="col-span-1 m-2 p-2 text-center items-center justify-center min-h-52"
        >
          <CardHeader className="justify-center">{job.title}</CardHeader>
          <CardBody className="text-center">
            <div>{job.location}</div>
            <div>{job.charity.name}</div>
            <div>{job.progress}</div>
            <div>{job.completed}</div>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default StudentJobsList;
