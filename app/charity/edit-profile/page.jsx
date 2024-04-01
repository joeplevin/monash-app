import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getCharitybyUser } from "@/lib/actions/charityActions";
import EditCharityProfileForm from "@/app/components/EditCharityProfileForm";

const EditProfile = async () => {
  const session = await getServerSession(authOptions);
  let user = session?.user;
  let charity = await getCharitybyUser(user.id);

  return (
    <div>
      <EditCharityProfileForm charity={charity} />
    </div>
  );
};

export default EditProfile;
