import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getStudent } from "@/lib/actions/studentActions";
import PDFView from "@/app/components/PDFView";
import { runPythonScript } from "@/index.js";

const ViewCV = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const student = await getStudent(user.id);
  const resumeSkills = await runPythonScript(student.Cv?.cvUrl);
  console.log("view cv", student.Cv?.cvUrl);
  return (
    <>
  <PDFView cvUrl={student.Cv?.cvUrl} />
  {/* <div>{resumeSkills ? resumeSkills[0] :}</div> */}
  </>
  )
};

export default ViewCV;
