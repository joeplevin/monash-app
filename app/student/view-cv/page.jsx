import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getStudent } from "@/lib/actions/studentActions";
import PDFView from "@/app/components/PDFView";

const ViewCV = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const student = await getStudent(user.id);
  console.log("view cv", student.Cv?.cvUrl);
  return <PDFView cvUrl={student.Cv?.cvUrl} />;
};

export default ViewCV;
