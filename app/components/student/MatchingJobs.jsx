import React from "react";
import { Button, Card } from "@nextui-org/react";
import Link from "next/link";

const MatchingJobs = (matchedJobs) => {
  console.log("matchedJobs", matchedJobs);
  return (
    <>
      <div className="center flex justify-center p-10 text-lg">
        <p>Matching Jobs</p>
      </div>
      <Card className="grid grid-cols-3 col mr-5 justify-center border-1 border-solid rounded-20 shadow-2 m-5 p-3">
        {matchedJobs.matchedJobs.length > 0 ? (
          matchedJobs.matchedJobs.map((job, index) => (
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
      </Card>
    </>
  );
};

export default MatchingJobs;
