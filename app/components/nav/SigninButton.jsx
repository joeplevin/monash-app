"use client";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const SigninButton = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center gap-2">
      {session && session.user ? (
        <>
          <Link
            href={
              session.user.role === "admin"
                ? "/admin"
                : session.user.role === "charity"
                ? "/charity"
                : session.user.role === "student"
                ? "/student"
                : "/"
            }
          >{`${session.user.firstName} ${session.user.lastName}`}</Link>
          <Link
            className="text-sky-500 hover:text-sky-600 transition-colors"
            href={"/api/auth/signout"}
          >
            Sign Out
          </Link>
        </>
      ) : (
        <>
          <Button onClick={() => signIn()}>Sign In</Button>
        </>
      )}
    </div>
  );
};

export default SigninButton;
