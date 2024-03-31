import { getServerSession } from "@clerk/clerk-sdk-node";
import { getStudent } from "@/app/queries/students";
import { getJob } from "@/app/queries/jobs";
import { authOptions } from "@/lib/authOptions";

const NewApplication = async ({ params }) => {
  const session = await getServerSession(authOptions);
  const student = await getStudent(session.user.id);
  const job = await getJob(params.id);
  return <ApplicationForm />;
};

export default NewApplication;
