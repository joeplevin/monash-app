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
    <div>
      <h1>Job Applications</h1>
      <Card className="flex flex-wrap justify-center p-5 w-[900px] h-[950px] absolute">
        {jobApplications.length > 0 ? (
          jobApplications.map((jobApplication) => (
            <CharityApproval jobApplication={jobApplication} />
          ))
        ) : (
          <p>No applications available</p>
        )}
      </Card>
    </div>
  );
};

export default ApplicationsPage;
