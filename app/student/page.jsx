import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Input, Button } from "@nextui-org/react";
import UploadCV from "@/app/components/uploadCV";
import { getStudent } from "@/lib/actions/studentActions";
import { Document } from "@react-pdf/renderer";
import { DocumentIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import PDFView from "../components/PDFView";

const StudentProfile = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const student = await getStudent(user.id);
  console.log("student profile", student.Cv?.cvUrl);

  return (
    <>
      <div>
        <div>Adding this to create branch</div>
        <UploadCV user={user} />
        <div className="grid grid-cols-4 gap-y-4">
          <h1>First Name: </h1>
          <h1>{student?.user?.firstName}</h1>
          <h1>Last Name: </h1>
          <h1>{student?.user?.lastName}</h1>
          <h1>Email: </h1>
          <h1>{student?.user?.email}</h1>
          <h1>Phone: </h1>
          <h1>{student?.user?.phone}</h1>
          <h1>CV:</h1>
          <h1>{student.Cv.cvUrl}</h1>
          {student?.Cv ? (
            <Button as={Link} href="/student/view-cv">
              <DocumentIcon className="w-4" />
            </Button>
          ) : (
            <p> No Cv uploaded</p>
          )}
        </div>
        <div className="flex justify-center">
          <PDFView cvUrl={student.Cv?.cvUrl} />
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
