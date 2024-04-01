import SignupForm from "@/app/components/auth/SignupForm";
import { Image } from "@nextui-org/react";
import { getCharities } from "@/lib/actions/charityActions";
import Link from "next/link";

const SignupPage = async () => {
  // Get charities for the charity signup form
  const charities = await getCharities();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center items-center gap-3">
      <div className="md:col-span-2 flex justify-center items-center">
        <p className="text-center p-2 text-white">Already Signed up?</p>
        <Link href={"/auth/signin"}>Sign In</Link>
      </div>
      <SignupForm role="charity" charities={charities} />
      <Image src="/login.png" alt="login" width={500} height={500} />
    </div>
  );
};

export default SignupPage;
