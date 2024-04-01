import { getCharityJobs } from "@/lib/actions/charityActions";
import { getCharity } from "@/lib/actions/charityActions";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const ViewStudentsPage = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const charity = await getCharity(user.id);
  const charityJobs = await getCharityJobs(charity.id);

  return (
    <>
      <div>Charity Students</div>
      {charityJobs.map((job) =>
        job.student ? (
          <div>
            <div>{job.title}</div>
            <div>{job.description}</div>
            <div>{job.student.user.firstName}</div>
            <div>{job.student.user.lastName}</div>
            <div>{job.student.user.email}</div>
            <div>
              <Button
                as={Link}
                href={`/charity/upload-certificates/${job.student.id}`}
              >
                Upload Certificate
              </Button>
            </div>
          </div>
        ) : (
          <div>No students</div>
        )
      )}
    </>
  );
};

export default ViewStudentsPage;
