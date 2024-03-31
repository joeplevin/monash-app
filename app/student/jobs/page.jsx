import { getJobs, getStudentJobs } from "@/lib/actions/jobActions";
import {
  getStudentApplications,
  getStudentApplicationsForJob,
} from "@/lib/actions/applicationActions";
import { getStudent } from "@/lib/actions/studentActions";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import JobsList from "@/app/components/student/JobsList";
import { all } from "axios";
import StudentJobsTable from "@/app/components/student/jobs/StudentJobsTable";
import AllJobsTable from "@/app/components/student/jobs/AllJobsTable";

const StudentJobs = async () => {
  const session = await getServerSession(authOptions);
  const student = await getStudent(session.user.id);
  const allJobs = await getJobs();
  const studentJobApplications = await getStudentApplicationsForJob(
    student.userId
  );
  console.log("got apps for job", studentJobApplications);

  const studentApplications = await getStudentApplications(student.userId);

  console.log("got apps", studentApplications);

  const certificates = student.Certificates;
  // console.log("got cert", certificates[0].certificateUrl);
  const studentJobs = await getStudentJobs(student.userId);

  // Remove jobs that student has already applied for
  for (let i = 0; i < allJobs.length; i++) {
    for (let j = 0; j < studentJobs.length; j++) {
      if (allJobs[i].id === studentJobs[j].id) {
        allJobs.splice(i, 1);
      }
    }
    for (let k = 0; k < studentApplications.length; k++) {
      if (allJobs[i].id === studentApplications[k].jobId) {
        allJobs[i].status = studentApplications[k].applicationStatus;
      }
    }
  }

  return (
    <div className="grid grid-cols-2 max-h-screen">
      <Card className="col-span-1 p-2 m-2">
        <CardHeader className="justify-center">
          <h1 className="col-span-1 text-center p-3"> Your Jobs </h1>
        </CardHeader>
        <CardBody>
          <StudentJobsTable className="col-span-1" jobs={studentJobs} />
        </CardBody>
      </Card>
      <Card className="col-span-1 p-2 m-2">
        <CardHeader className="justify-center">
          <h1 className="col-span-1 text-center p-3"> All Jobs </h1>
        </CardHeader>
        <CardBody>
          <AllJobsTable className="col-span-1" jobs={allJobs} />
        </CardBody>
      </Card>
    </div>
  );
};

export default StudentJobs;
