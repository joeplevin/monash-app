import PDFView from "@/app/student/PDFView";
import { getStudent } from "@/lib/actions/studentActions";
import React from "react";

const ViewCV = async ({ params }) => {
  const student = await getStudent(params.id);
  console.log("student", student);
  return (
    <div>
      <PDFView cvUrl={student.Cv.cvUrl} />
    </div>
  );
};

export default ViewCV;
