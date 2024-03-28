import EditStudentProfileForm from "@/app/components/student/EditStudentProfileForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getStudent } from "@/lib/actions/studentActions";

const StudentEditProfile = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const student = await getStudent(user.id);

  return (
    <div>
      <h1>Edit Student Profile</h1>
      <EditStudentProfileForm student={student} />
    </div>
  );
};

export default StudentEditProfile;
