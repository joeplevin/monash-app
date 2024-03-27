import CharityEditJobForm from "@/app/components/charity/CharityEditJobForm";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getCharity } from "@/lib/actions/charityActions";

const EditJobPage = () => {
  return <CharityEditJobForm />;
};

export default EditJobPage;
