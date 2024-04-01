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
  Tooltip,
} from "@nextui-org/react";
import testData from "/lib/charityjobcardData.json";
import { Link } from "@nextui-org/react";
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  KeyIcon,
  EyeIcon,
  EyeSlashIcon,
  PlusCircleIcon,
  PencilIcon,
} from "@heroicons/react/20/solid";
import CharityHomepageJobs from "../components/CharityHomepageJobs";
import { getCharity } from "@/lib/actions/charityActions";
import { getCharityJobs } from "@/lib/actions/charityActions";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import CharityHomePageDetails from "../components/charity/CharityHomePageDetails";

const CharityHomePage = async () => {
  const session = await getServerSession(authOptions);
  console.log("charity homepage session", session);
  const user = session?.user;
  console.log("user", user);
  const charity = await getCharity(user.id);
  console.log("charity", charity);
  const charityJobs = await getCharityJobs(charity.id);
  console.log("charityJobs", charityJobs);

  return (
    <>
      <h1 class="text-2xl">
        <center>
          <b>Charity Homepage</b>
        </center>
      </h1>
      <Tooltip content="Create a new job" placement="right">
        <Button
          as={Link}
          href="/charity/createjob"
          isIconOnly
          color="danger"
          size="lg"
          className="right-[40px] top-[80px] absolute"
        >
          <PlusCircleIcon />
        </Button>
      </Tooltip>
      <h1 class="text-left text-lg"></h1>
      <br></br>
      <br></br>
      <div className="flex justify-center">
        <Card className=" flex flex-wrap justify-center p-5 w-[900px] h-[1500px] right-[40px]">
          <div className="flex flex-wrap justify-center p-5">
            {charityJobs.length > 1 ? (
              charityJobs.map((charityJob) => (
                <div className="flex flex-row justify-center max-w-[400px]">
                  <CharityHomepageJobs charityJob={charityJob} />
                </div>
              ))
            ) : (
              <div>
                <CharityHomepageJobs charityJob={charityJobs[0]} />
              </div>
            )}
          </div>
        </Card>
        <div className="flex justify-center">
          <Card className="flex flex-wrap p-5 w-[900px] h-[1500px] left-[40px] ">
            <h1>
              <center>Your Charity Details</center>
            </h1>
            <div className="flex flex-wrap justify-center p-5">
              <>
                <CharityHomePageDetails charity={charity} />
              </>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CharityHomePage;
