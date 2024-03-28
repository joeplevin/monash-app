"use client";
import { useSession } from "next-auth/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const HomePage = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center gap-2">
      {!session && !session?.user && (
        <>
          <Button as={Link} href="auth/student/signup">
            Students
          </Button>
          <Button as={Link} href="auth/charity/signup">
            Charities
          </Button>
        </>
      )}
      {session?.user.role == "student" && (
        <Button as={Link} href="/student">
          Dashboard
        </Button>
      )}
      {session?.user.role == "charity" && (
        <Button as={Link} href="/charity">
          Dashboard
        </Button>
      )}
      {session?.user.role == "admin" && (
        <Button as={Link} href="/admin">
          Dashboard
        </Button>
      )}
    </div>
  );
};

export default HomePage;
