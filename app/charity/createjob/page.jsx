import CreateJobCard from "@/app/components/charity/CharityCreateJobForm";
import React from "react";
import { getCharity } from "@/lib/actions/charityActions";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const CharityCreateJobPage = async () => {
  const session = await getServerSession(authOptions);
  console.log("charity homepage session", session);
  const user = session?.user;
  console.log("user", user);
  const charity = await getCharity(user.id);
  console.log("charity", charity);

  return <CreateJobCard charity={charity} />;
};
export default CharityCreateJobPage;
