import Link from "next/link";
import { Checkbox, Tooltip, getKeyValue, Button } from "@nextui-org/react";
import { EyeIcon, EditIcon, DeleteIcon } from "@/app/components/icons";
export const columns = [
  { key: "title", label: "Title" },
  { key: "location", label: "Location" },
  { key: "charity", label: "Charity" },
  { key: "application", label: "Application Status" },
  { key: "skills", label: "Skills" },
  { key: "actions", label: "Actions" },
];

export const renderCell = (job, columnKey) => {
  const cellValue = getKeyValue(job, columnKey);
  console.log("alljobs table applications", job.status);
  switch (columnKey) {
    case "title":
      return <Link href={`/student/jobs/${job.id}`}>{cellValue}</Link>;
    case "charity":
      return job.charity.name;
    case "application":
      return job.status == "in progress" ? (
        <Button
          as={Link}
          href={`/student/applications/${job.id}`}
          isDisabled
          className="bg-orange-400"
        >
          In Progress
        </Button>
      ) : job.status == "rejected" ? (
        <Button
          as={Link}
          href={`/student/applications/${job.id}`}
          isDisabled
          className="bg-red-400"
        >
          Rejected
        </Button>
      ) : (
        <Button
          as={Link}
          href={`/student/applications/new-application/${job.id}`}
          className="bg-green-400"
        >
          Apply
        </Button>
      );
    case "completed":
      return job.completed ? (
        <Checkbox defaultSelected isDisabled>
          Complete
        </Checkbox>
      ) : (
        <Checkbox isDisabled>Incomplete</Checkbox>
      );
    case "actions":
      return (
        <div className="relative flex items-center gap-4">
          <Tooltip content="Details">
            <Link href={`/student/jobs/${job.id}`}>
              <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                <EyeIcon />
              </span>
            </Link>
          </Tooltip>
          {/* <Tooltip content="Edit user">
            <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
              <EditIcon />
            </span>
          </Tooltip> */}
          {/* <Tooltip color="danger" content="Delete user">
            <span className="cursor-pointer text-lg text-danger active:opacity-50">
              <DeleteIcon />
            </span>
          </Tooltip> */}
        </div>
      );
    default:
      return cellValue;
  }
};
