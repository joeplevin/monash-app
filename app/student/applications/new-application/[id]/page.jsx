import { getServerSession } from "next-auth";
import { getStudent } from "@/lib/actions/studentActions";
import { getJob } from "@/lib/actions/jobActions";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ApplicationForm from "@/app/components/student/jobs/ApplicationForm";
import PDFView from "@/app/components/student/PDFView";
import StudentDetails from "@/app/components/student/profile/StudentDetails";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import UploadCV from "@/app/components/student/uploadCV";

const NewApplication = async ({ params }) => {
  const session = await getServerSession(authOptions);
  const student = await getStudent(session.user.id);
  console.log("student", student);
  const job = await getJob(params.id);
  return <ApplicationForm job={job} student={student} />;
};

export default NewApplication;
