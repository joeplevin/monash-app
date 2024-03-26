import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  ModalFooter,
  Textarea,
} from "@nextui-org/react";
import CharityEditJobForm from "@/app/components/charity/CharityEditJobForm";
import { Link } from "@nextui-org/react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const CharityHomePage = async () => {
  const session = await getServerSession(authOptions);
  const charity = session?.user.charity;
  console.log(charity);

  return (
    <>
      <div className="flex flex-wrap justify-center p-5 mt-10">
        <Button
          as={Link}
          href="/charity/createjob"
          className="fixed top-13 right-4 text-white gap-2 rounded-lg"
          color="primary"
          size="lg"
        >
          Add Job
        </Button>

        <Button
          as={Link}
          href="/charity/jobapplications"
          className="fixed top-13  left-[20px] text-white gap-2 rounded-lg"
          color="primary"
          size="lg"
        >
          View Applications
        </Button>
      </div>

      <div className="flex flex-wrap justify-center p-5 mt-10">
        <CharityEditJobForm />
      </div>
    </>
  );
};

export default CharityHomePage;
