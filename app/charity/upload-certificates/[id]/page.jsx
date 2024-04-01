import UploadCertificate from "@/app/components/UploadCertificate";
import { getCharity } from "@/lib/actions/charityActions";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const UploadCertificatePage = async ({ params }) => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const charity = await getCharity(user.id);
  const studentId = params.id;
  return (
    <>
      <div>
        <h1>Upload Certificate</h1>
      </div>
      <div>
        <UploadCertificate charityId={charity.id} studentId={studentId} />
      </div>
    </>
  );
};

export default UploadCertificatePage;
