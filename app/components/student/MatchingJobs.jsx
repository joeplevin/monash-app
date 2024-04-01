import React from "react";
import { Button, Card, CardHeader, CardBody } from "@nextui-org/react";
import Link from "next/link";

const MatchingJobs = ({ matchedJobs }) => {
  return (
    <>
      <Card className="m-5">
        <CardHeader className="justify-center bg-blue-300">
          <h1 className="text-white w-full pl-3">Matching Jobs</h1>
        </CardHeader>
        <CardBody>
          {matchedJobs.length > 0 ? (
            matchedJobs.map((job, index) => (
              <Button
                as={Link}
                href={`/students/applications/new-application/${job.id}`}
                className="col-span-1 m-5 p-1"
                color="primary"
              >
                {job.title}
              </Button>
            ))
          ) : (
            <h1>No Matching Jobs Found, sorry sucker</h1>
          )}
        </CardBody>
      </Card>
    </>
  );
};

export default MatchingJobs;
