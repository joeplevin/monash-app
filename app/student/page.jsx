import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Input, Button } from "@nextui-org/react";
import UploadCV from "@/app/components/student/uploadCV";
import { getStudent } from "@/lib/actions/studentActions1";
import { Document } from "@react-pdf/renderer";
import { DocumentIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import PDFView from "../components/student/PDFView";
import StudentDetails from "../components/student/StudentDetails";

const StudentProfile = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  console.log("user profile", user);
  const student = await getStudent(user.id);
  console.log("student profile", student.Cv?.cvUrl);

  return (
    <>
      <StudentDetails student={student}></StudentDetails>
    </>
  );
};

export default StudentProfile;
