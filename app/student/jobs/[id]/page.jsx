import { getJob } from "@/lib/actions/jobActions";
import JobDetails from "@/app/components/student/jobs/JobDetails";

import React from "react";

const JobPage = async ({ params }) => {
  const job = await getJob(params.id);
  return (
    <>
      <div className="items-center">
        <JobDetails job={job} />
      </div>
    </>
  );
};

export default JobPage;
