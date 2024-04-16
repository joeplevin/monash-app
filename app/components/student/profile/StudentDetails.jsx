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
import ThumbnailView from "@/app/components/ThumbnailView";
import { EditIcon } from "../../icons";

const StudentDetails = ({ student }) => {
  const user = student?.user;
  return (
    <Card className="m-5">
      <CardHeader className="justify-center bg-orange-300">
        <h1 className="text-white w-full pl-3">Your Details</h1>
        <Link href="/student/edit-profile" className="pr-3">
          <EditIcon />
        </Link>
      </CardHeader>
      <CardBody className="items-center text-center">
        <div className="grid grid-cols-1 gap-4">
          <h1>
            {student?.user?.firstName} {student?.user?.lastName}
          </h1>
          <h1>{student?.user?.email}</h1>
          <h1>{student?.user?.phone}</h1>
          {student?.Cv ? (
            <Button as={Link} href="/student/view-cv">
              <h1>CV</h1>
              <DocumentIcon className="w-4" />
            </Button>
          ) : (
            <UploadCV />
          )}
          <div>
            {student?.Certificates ? (
              student.Certificates?.map((certificate) => (
                <Button as={Link} href="/student/view-cv">
                  <h1>Certificate</h1>
                  <DocumentIcon className="w-4" />
                </Button>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default StudentDetails;
