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

  cvSkills: z
    .string()
    .min(10, "Skills is too short")
    .max(200, "Skills is too long"),
});

const CreateJobCard = () => {
  const session = getSession();
  const charity = session?.user?.charity;
  console.log("charity", charity);

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
    const { charity, ...job } = data;
    console.log("charity", charity);
    try {
      const res = await createJob(job);
      toast.success("Job created successfully");
      router.push("/charity");
    } catch (error) {
      toast.error("Error creating job");
    }
  };

  const createJob = async (jobData) => {
    console.log(jobData);
    try {
      const response = await fetch("../api/createJobPath", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobData),
      });

      if (response.ok) {
        console.log("Job successfully added!");
      } else {
        console.error("Error adding Job");
      }
    } catch (error) {
      console.error("Error adding job", error);
    }
  };

  return (
    <>
      <Button
        as={Link}
        href="/charity"
        className="fixed top-13 right-4 text-white gap-2 rounded-lg"
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
                errorMessage={errors.jobTitle?.message}
                className=" flex-wrap md:flex-nowrap gap-4 p-2 m-5 max-w-xl"
                placeholder="Enter your job title here"
                label="Job Title"
                {...register("jobTitle")}
              />

              <Input
                errorMessage={errors.jobDescription?.message}
                className="flex w-full flex-wrap md:flex-nowrap gap-4 p-2 m-5 max-w-xl"
                placeholder="Enter your job description here"
                label="Job Description"
                {...register("jobDescription")}
              />

              <Input
                className="flex w-full flex-wrap md:flex-nowrap gap-4 p-2 m-5 max-w-xl"
                placeholder="Enter your job location here"
                label="Job Location"
                {...register("jobLocation")}
              />

              <Input
                className="flex w-full flex-wrap md:flex-nowrap gap-4 p-2 m-5 max-w-xl"
                placeholder="Enter your required skills here"
                label="Skills"
                {...register("jobSkills")}
              />
            </form>
          </CardBody>

          <Button
            className="m-5 border-default-300 text-white"
            color="success"
            size="md"
            type="submit"
          >
            Add Job
          </Button>
        </Card>
      </div>
    </>
  );
};

export default CreateJobCard;
