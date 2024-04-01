import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

const JobDetails = ({ job }) => {
  return (
    <>
      <Card className="max-w-fit justify-center items-center text-center">
        <CardHeader className="justify-center">
          <h1>Job Title:</h1>
          <div>{job.title}</div>
        </CardHeader>
        <CardBody className="justify-center items-center">
          <h1>Location:</h1>
          <div>{job.location}</div>
          <h1>Charity:</h1>
          <div>{job.charity.name}</div>
        </CardBody>
        <CardFooter className="grid grid-cols-2 text-center justify-center items-center">
          <h3 className="col-span-2">Skills Required:</h3>
          <ul className="col-span-2 grid grid-cols-2 gap-2 text-center justify-center items-center">
            {job.cvSkills?.map((skill, index) => (
              <li
                key={index}
                className="col-span-1 text-center items-center justify-center"
              >
                {skill.skill}
              </li>
            ))}
          </ul>
        </CardFooter>
      </Card>
    </>
  );
};

export default JobDetails;
