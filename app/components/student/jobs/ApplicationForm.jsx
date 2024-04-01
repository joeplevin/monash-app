"use client";
import { createApplication } from "@/lib/actions/applicationActions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import StudentDetails from "@/app/components/student/profile/StudentDetails";
import UploadCV from "@/app/components/student/uploadCV";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { useCallback } from "react";

const ApplicationForm = (params) => {
  console.log("job", params.job, "student", params.student);
  const router = useRouter();
  const applyNow = useCallback(
    async (jobId, studentId) => async () => {
      console.log("applying...", jobId, studentId);
      try {
        await createApplication(jobId, studentId);
        toast.success("Application submitted successfully");
        router.push(`/student/applications`);
      } catch (error) {
        toast.error("Failed to apply");
      }
    },
    []
  );
  // const application = await createApplication(job.id, student.id);

  return (
    <>
      {params.student.Cv?.cvUrl ? (
        <Card>
          <CardHeader>
            <h1 className="text-2xl font-bold">Submit Your Application</h1>
          </CardHeader>
          <CardBody>
            <StudentDetails student={params.student} />
          </CardBody>
          <CardFooter className="text-center justify-center items-center">
            <Button
              onClick={() => {
                applyNow(params.job.id, params.student.id);
              }}
            >
              Apply
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <h1 className="text-2xl font-bold">
              Please upload your CV before applying...
            </h1>
          </CardHeader>
          <CardBody>
            <UploadCV />
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default ApplicationForm;
