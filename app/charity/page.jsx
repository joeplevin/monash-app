import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const CharityHomePage = () => {
  const session = getServerSession(authOptions);
  const user = session?.user;
  return (
    <>
      <Button as={Link} href="/charity/edit-profile">
        Edit Profile
      </Button>
      <div>CharityHomePage</div>
    </>
  );
};

export default CharityHomePage;
