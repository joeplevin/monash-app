import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Input, Button } from "@nextui-org/react";
import UploadCV from "@/app/components/student/uploadCV";
import { getStudent } from "@/lib/actions/studentActions";
import { Document, Thumbnail } from "@react-pdf/renderer";
import { DocumentIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import PDFView from "../components/student/PDFView";
import StudentDetails from "../components/student/profile/StudentDetails";
import { Matcher } from "@/lib/matcher";
import MatchingJobs from "../components/student/MatchingJobs";
import MatchingSkills from "../components/student/MatchingSkills";

const StudentProfile = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const student = await getStudent(user.id);
  const matched = await Matcher();

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3">
        <StudentDetails className="col-span-1 row-span-1" student={student} />
        <MatchingJobs matchedJobs={matched.finalJobs} />
        <MatchingSkills matchedSkills={matched.matchedSkills} />
      </div>
    </>
  );
};

export default StudentProfile;
