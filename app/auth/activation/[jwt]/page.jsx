import { activateUser } from "@/lib/actions/authActions";
const Activation = async ({ params }) => {
  const result = await activateUser(params.jwt);
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {result === "user not found" ? (
        <p className="text-red-500 text-2xl">User does not exist</p>
      ) : result === "user already activated" ? (
        <p className="text-red-500 text-2xl">User already activated</p>
      ) : result === "success" ? (
        <p className="text-green-500 text-2xl">Activation successful</p>
      ) : (
        <p className="text-red-500 text-2xl">Unknown error</p>
      )}
    </div>
  );
};

export default Activation;
