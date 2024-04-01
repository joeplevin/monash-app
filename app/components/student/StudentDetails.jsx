import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { DocumentIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import UploadCV from "@/app/components/student/uploadCV";
import PDFView from "@/app/components/student/PDFView";

const StudentDetails = ({ student }) => {
  const user = student?.user;
  return (
    <Card>
      <CardHeader>Student Details</CardHeader>
      <CardBody>
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
          <h1>{student?.Cv?.cvUrl}</h1>
        </div>
        {/* <div>
          <UploadCV user={user} />
          {student?.Cv ? (
            <Button as={Link} href="/student/view-cv">
              <DocumentIcon className="w-4" />
            </Button>
          ) : (
            <p> No Cv uploaded</p>
          )}
        </div> */}
        <div className="flex justify-center">
          <PDFView cvUrl={student.Cv?.cvUrl} />
          <div>
            <Link href={`${student.Cv?.cvUrl}`}>CV</Link>
          </div>
        </div>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default StudentDetails;
