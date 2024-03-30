import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getStudent } from "@/lib/actions/studentActions";
import PDFView from "@/app/components/student/PDFView";
import { runPythonScript } from "@/index.js";
import { Card, CardBody, CardHeader, Button } from "@nextui-org/react";
import Link from "next/link"

const ViewCV = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const student = await getStudent(user.id);
  // const result = await runPythonScript(student.Cv?.cvUrl);
  // const fileName = result[1].toString();
  // const resumeSkills = result[0][fileName];
  const resumeSkills = [
    'Rust',
    'node',
    'JavaScript',
    'spanish',
    'github',
    'newcastle',
    'microsoft',
    'MongoDB',
    'french',
    'english',
    'northumbria university',
    'Go',
    'Java',
    'java',
    'ci/cd & including \nbuilding authentication',
    'C#',
    'the \ndesign & development',
    'Azure',
    'Chef',
    'TypeScript',
    'chef &'
  ]

  return (
    <>
      <div className="justify-center">
        <PDFView cvUrl={student.Cv?.cvUrl} />
      </div>
      <Card>
        <CardHeader className="justify-center">Your Skills</CardHeader>
        <CardBody>
          <ul className="columns-3">
            {resumeSkills.length > 0 ? (
              resumeSkills.map((skill, index) => <li key={index}>{skill}</li>)
            ) : (
              <li></li>
            )}
          </ul>
        </CardBody>
      </Card>
      <Button as={Link} href="/student/matching">View Your Matching Skills & Jobs</Button>
    </>
  );
};

export default ViewCV;
