"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Textarea,
  Link,
  Input,
  useDisclosure,
  Select,
} from "@nextui-org/react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  KeyIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/20/solid";
import { z } from "zod";
import validator from "validator";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";
import { updateJob } from "@/lib/actions/charityActions";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useModal,
} from "@nextui-org/react";

const CharityEditJobSchema = z.object({
  title: z
    .string()
    .min(2, "Edited  Job Title is too short")
    .max(20, "Edited Job Title is too long")
    .regex(
      new RegExp("^[a-zA-Z ]+$"),
      "First name must contain only letters and spaces"
    ),
  description: z
    .string()
    .min(10, "Edited Job Description is too short")
    .max(300, "Edited Job Description is too long"),

  location: z
    .string()
    .min(8, "Edited Job location is too short")
    .max(100, "Edited Job location is too long"),
});

const EditCharityJobForm = (job) => {
  console.log("job from EditCharityJobForm", job);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CharityEditJobSchema),
  });

  const router = useRouter();

  const saveJob = async (data) => {
    console.log("Modified Job", data);
    try {
      const res = await updateJob(data, job.job.id);
      toast.success("Job Updated Successfully");
      router.push("/charity");
    } catch (error) {
      toast.error("Error updating job");
      console.log("Error updating job", error);
    }
  };
  return (
    <div className="flex flex-col p-5">
      <>
        <Card className="flex flex-col grid-rows-2 p-5 w-[850px] h-90 left-[520px]">
          <h1>
            <center>
              <b>
                <u>Edit your Job</u>
              </b>
            </center>
          </h1>
          <CardBody className="w-[850px] h-90 left-[100px]">
            <form onSubmit={handleSubmit(saveJob)}>
              <Input
                errorMessage={errors.title?.message}
                className=" flex-wrap md:flex-nowrap gap-4 p-2 m-5 max-w-xl"
                label="Job Name"
                defaultValue={job.job.title}
                {...register("title")}
              />

              <Input
                errorMessage={errors.description?.message}
                className="flex w-full flex-wrap md:flex-nowrap gap-4 p-2 m-5 max-w-xl"
                label="Job Description"
                defaultValue={job.job.description}
                {...register("description")}
              />

              <Input
                errorMessage={errors.location?.message}
                className="flex w-full flex-wrap md:flex-nowrap gap-4 p-2 m-5 max-w-xl"
                label="Job Location"
                defaultValue={job.job.location}
                {...register("location")}
              />
              {/* <Select
                className="flex w-full flex-wrap md:flex-nowrap gap-4 p-2 m-5 max-w-xl"
                label="Choose new Required Skills"
                defaultValue={job.job.skills}
                {...register("skills")}
              ></Select> */}

              <Button
                className="m-5 border-default-300 text-white justify-center left-[210px]"
                color="success"
                size="md"
                type="submit"
              >
                Save Changes
              </Button>
            </form>
          </CardBody>
        </Card>
      </>
    </div>
  );
};

export default EditCharityJobForm;
