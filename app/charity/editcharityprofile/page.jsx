import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getCharity } from "@/lib/actions/charityActions";
import CharityEditProfileForm from "@/app/components/charity/CharityEditProfileForm";

const EditProfile = async () => {
  const session = await getServerSession(authOptions);
  let user = session?.user;
  console.log("user", user);

  const charity = await getCharity(user.id);
  console.log("Charity", charity);

  return (
    <div>
      <CharityEditProfileForm charity={charity} />
    </div>
  );
};

export default EditProfile;
