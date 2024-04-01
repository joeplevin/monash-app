import React from "react";
import CharityApproval from "@/app/components/charity/CharityApplicationsPage";
import { getJobApplications } from "@/lib/actions/charityActions";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Card, CardHeader } from "@nextui-org/react";

const ApplicationsPage = async ({ params }) => {
  const session = await getServerSession(authOptions);
  console.log("charity applications page session", session);
  const user = session?.user;
  console.log("user", user);
  const jobApplications = await getJobApplications(params.id);
  console.log("Job Applications", jobApplications);

  return (
    <>
      <h1>
        <center>Applications Page</center>
      </h1>
      <br></br>
      <br></br>
      <div className="flex flex-wrap justify-center px-5">
        {jobApplications.length > 0 ? (
          jobApplications.map((jobApplication) => (
            <CharityApproval jobApplication={jobApplication} />
          ))
        ) : (
          <p>No applications available</p>
        )}
      </div>
    </>
  );
};

export default ApplicationsPage;
