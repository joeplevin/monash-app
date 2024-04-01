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
  Select,
  SelectItem,
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
import { createJob } from "@/lib/actions/charityActions";

const CreateJobFormSchema = z.object({
  title: z
    .string()
    .min(2, "Job Title is too short")
    .max(50, "Job Title is too long")
    .regex(
      new RegExp("^[a-zA-Z ]+$"),
      "First name must contain only letters and spaces"
    ),
  description: z
    .string()
    .min(10, "Job Description is too short")
    .max(200, "Job Description is too long"),

  location: z
    .string()
    .min(10, "Job location is too short")
    .max(200, "Job location is too long"),

  skills: z.array(z.string()),
});

const CreateJobCard = (params) => {
  console.log("Create job", params.charity);
  console.log("Skills", params.skills);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CreateJobFormSchema),
  });

  const router = useRouter();

  const saveJob = async (data) => {
    console.log("Data", data);
    const { charityId, ...job } = data;
    console.log("Job", params.charity);
    try {
      const res = await createJob(job, params.charity);
      toast.success("Job created successfully");
      router.push("/charity");
    } catch (error) {
      toast.error("Error creating job");
      console.log("Error creating job", error);
    }
  };

  return (
    <>
      <Button
        as={Link}
        href="/charity"
        className="fixed top-13 right-4 text-white gap-2 rounded-lg mt-10"
        color="primary"
        size="lg"
      >
        Main Page
      </Button>

      <div className="flex flex-col grid-rows-2 p-5">
        <br />
        <br />

        <Card className="w-[850px] h-90 left-[520px]">
          <h1>
            <center>
              <b>
                <u>Add a job</u>
              </b>
            </center>
          </h1>
          <CardBody className="w-[850px] h-90 left-[100px]">
            <form onSubmit={handleSubmit(saveJob)}>
              <Input
                errorMessage={errors.title?.message}
                className=" flex-wrap md:flex-nowrap gap-4 p-2 m-5 max-w-xl"
                placeholder="Enter your job title here"
                label="Job Title"
                {...register("title")}
              />
              <Input
                errorMessage={errors.description?.message}
                className="flex w-full flex-wrap md:flex-nowrap gap-4 p-2 m-5 max-w-xl"
                placeholder="Enter your job description here"
                label="Job Description"
                {...register("description")}
              />
              <Input
                errorMessage={errors.location?.message}
                className="flex w-full flex-wrap md:flex-nowrap gap-4 p-2 m-5 max-w-xl"
                placeholder="Enter your job location here"
                label="Job Location"
                {...register("location")}
              />

              <Select
                label="Choose Required Skills"
                placeholder="Select skills"
                selectionMode="multiple"
                className="flex w-full flex-wrap md:flex-nowrap gap-4 p-2 m-5 max-w-xl"
                {...register("cvSkills")}
              >
                {params.skills.map((skill, index) => (
                  <SelectItem key={index} value={skill.id}>
                    {skill.skill}
                  </SelectItem>
                ))}
              </Select>

              <Button
                className="m-5 border-default-300 text-white"
                color="success"
                size="md"
                type="submit"
              >
                Add Job
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default CreateJobCard;
