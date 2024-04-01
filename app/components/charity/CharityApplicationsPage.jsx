"use client";

import React, { use } from "react";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import Link from "next/link";
import { approveApplication as approveApp } from "@/lib/actions/charityActions";
import { rejectApplication as rejectApp } from "@/lib/actions/charityActions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const CharityApproval = (jobApplication) => {
  console.log("Charity Approval", jobApplication);
  console.log("cvurl", jobApplication.jobApplication.student?.Cv?.cvUrl);

  const router = useRouter();

  const approveApplication = async (id) => {
    try {
      console.log("Approve Application", id);
      await approveApp(id);
      toast.success("Application Approved");
      router.push("/charity");
    } catch (error) {
      toast.error("Error approving application");
      console.log("error approving application", error);
    }
  };

  const rejectApplication = async (id) => {
    try {
      console.log("Reject Application", id);
      await rejectApp(id);
      toast.success("Application Rejected");
      router.push("/charity");
    } catch (error) {
      toast.error("Error rejecting application");
      console.log("error rejecting application", error);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center w-[400px]">
        <Card className="w-96 h-[750px] m-2 justify-center flex flex-col">
          <CardHeader className="absolute top-1 flex-col items-start"></CardHeader>
          <CardBody className="flex justify-between">
            <br></br>
            <p className="flex">
              First Name: {jobApplication.jobApplication.student.user.firstName}
            </p>
            <br></br>
            <p className="text-md">
              Last Name: {jobApplication.jobApplication.student.user.lastName}
            </p>
            <br />
            <p className="text-md">
              Email: {jobApplication.jobApplication.student.user.email}
            </p>
            <br />
            <p className="text-md">
              Phone Number: {jobApplication.jobApplication.student.user.phone}{" "}
            </p>
            <br />
            <div className="text-md">
              CV:{" "}
              {jobApplication.jobApplication.student.Cv.cvUrl !== "" ? (
                <Link
                  href={`/charity/viewcv/${jobApplication.jobApplication.student.id}`}
                >
                  View CV
                </Link>
              ) : (
                <p>No CV</p>
              )}
            </div>
            <br />
            <div className="text-md">
              Skills:
              {jobApplication.jobApplication.student.Cv.CvSkills.length > 0 ? (
                jobApplication.jobApplication.student.Cv.CvSkills.map(
                  (skill) => <p>{skill.skill}</p>
                )
              ) : (
                <p>
                  No skills available for this student. Please ask the student
                </p>
              )}
            </div>
            <br />
          </CardBody>

          {jobApplication.jobApplication.applicationStatus === "approved" ? (
            <div className=" flex justify-center items-center ">
              <h1>Application Already Approved</h1>
            </div>
          ) : (
            <Button
              className={
                "flex flex-col gap-2 p-2 m-5 border-default-300 text-white"
              }
              onClick={() => {
                approveApplication(jobApplication.jobApplication.id);
              }}
              color="success"
              size="lg"
            >
              Approve
            </Button>
          )}

          {jobApplication.jobApplication.applicationStatus === "rejected" ? (
            <div className=" flex justify-center items-center ">
              <h1>Application Already Rejected</h1>
            </div>
          ) : (
            <Button
              className={
                "flex flex-col gap-2 p-2 m-5 border-default-300 text-white"
              }
              onClick={() => {
                rejectApplication(jobApplication.jobApplication.id);
              }}
              color="danger"
              size="lg"
            >
              Reject
            </Button>
          )}
        </Card>
      </div>
    </>
  );
};

export default CharityApproval;
