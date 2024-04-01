import React from "react";
import { getCvSkills } from "@/lib/actions/charityActions";

const ViewJobApplicants = async ({ params }) => {
  const getCvSkills = async(params.id);
  console.log("getCvSkills", getCvSkills);
  return <CharityApplicationPage getCvSkills={getCvSkills} />;
};

export default page;
