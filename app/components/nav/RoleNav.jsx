"use client";
import { useSession } from "next-auth/react";
import StudentNav from "../student/StudentNav";

const RoleNav = () => {
  const { data: session } = useSession();
  const user = session?.user;

  // Render the navigation bar based on the user's role

  return (
    <>
      {session && session.user.role == "student" ? (
        <StudentNav />
      ) : session && session.user.role == "admin" ? (
        <div>Not logged in</div>
      ) : session && session.user.role == "charity" ? (
        <div>Not logged in</div>
      ) : (
        <></>
      )}
    </>
  );
};

export default RoleNav;