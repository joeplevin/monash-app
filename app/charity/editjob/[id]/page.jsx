import CharityEditJobForm from "@/app/components/charity/CharityEditJobForm";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getJob } from "@/lib/actions/charityActions";
import CharityEditJobSchema from "@/app/components/charity/CharityEditJobForm";
import { getCharity } from "@/lib/actions/charityActions";

const EditJobPage = async ({ params }) => {
  const job = await getJob(params.id);

  // console.log("Job", job);
  // return <div>{params.id}</div>;
  return <CharityEditJobForm job={job} />;
};

export default EditJobPage;
