import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getCharitybyUser } from "@/lib/actions/charityActions1";
import EditCharityProfileForm from "@/app/components/EditCharityProfileForm";

const EditProfile = async () => {
  const session = await getServerSession(authOptions);
  let user = session?.user;
  let charity = await getCharitybyUser(user.id);
  console.log(
    "charity Edit Profile",
    charity,
    "user",
    user,
    "session",
    session
  );

  return (
    <div>
      <EditCharityProfileForm charity={charity} />
    </div>
  );
};

export default EditProfile;
