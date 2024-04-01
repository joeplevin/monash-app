import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getStudent } from "@/lib/actions/studentActions";
import PDFView from "@/app/components/student/PDFView";
import { runPythonScript } from "@/index.js";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

const ViewCertificate = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const student = await getStudent(user.id);
  const certificates = student.Certificates;
  const result = await runPythonScript(student.Cv?.cvUrl);
  const fileName = result[1].toString();
  const resumeSkills = result[0][fileName];

  return (
    <>
      <div className="justify-center">
        <PDFView cvUrl={certificates[0].certificateUrl} />
      </div>
    </>
  );
};

export default ViewCertificate;
