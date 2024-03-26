import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Input, Button } from "@nextui-org/react";
import UploadCV from "@/app/components/uploadCV";

const StudentProfile = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <>
      <div>
        <div>Adding this to create branch</div>
        <UploadCV user={user} />
        <div className="grid grid-cols-4 gap-y-4">
          <h1>First Name: </h1>
          <h1>{user?.firstName}</h1>
          <h1>Last Name: </h1>
          <h1>{user?.lastName}</h1>
          <h1>Email: </h1>
          <h1>{user?.email}</h1>
          <h1>Phone: </h1>
          <h1>{user?.phone}</h1>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
