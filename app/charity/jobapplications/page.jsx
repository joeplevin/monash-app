import React from "react";
import CharityApproval from "@/app/components/charity/CharityApplicationsPage";
import { getJobApplications } from "@/lib/actions/charityActions";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const ApplicationsPage = async () => {
  const session = await getServerSession(authOptions);
  console.log("charity applications page session", session);
  const user = session?.user;
  console.log("user", user);
  const jobApplications = await getJobApplications();
  console.log("Job Applications", jobApplications);
  console.log("Job Applications CV", jobApplications[0].student.Cv);
  console.log("Job Applications User", jobApplications[0].student.user);
  return <CharityApproval jobApplications={jobApplications} />;
};

export default ApplicationsPage;
