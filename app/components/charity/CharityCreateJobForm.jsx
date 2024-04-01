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
  Checkbox,
  CheckboxGroup,
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
    console.log("Job", params.charity.charity);
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

      <div className="flex flex-col grid-rows-2 p-5 justify-center items-center">
        <br />
        <br />

        <Card className="w-[55%] h-90">
          <h1>
            <center>
              <b>
                <u>Add a job</u>
              </b>
            </center>
          </h1>
          <CardBody className="w-[850px] h-90 mx-auto ">
            <form onSubmit={saveJob} className="flex flex-col items-center">
              <Input
                errorMessage={errors.title?.message}
                className=" mx-auto gap-4 p-2 m-5 w-[75%]"
                placeholder="Enter your job title here"
                label="Job Title"
                {...register("title")}
              />
              <Input
                errorMessage={errors.description?.message}
                className="flex flex-wrap md:flex-nowrap gap-4 p-2 m-5 w-[75%]"
                placeholder="Enter your job description here"
                label="Job Description"
                {...register("description")}
              />
              <Input
                errorMessage={errors.location?.message}
                className="flex flex-wrap md:flex-nowrap gap-4 p-2 m-5 w-[75%]"
                placeholder="Enter your job location here"
                label="Job Location"
                {...register("location")}
              />
              <div className="grid grid-cols-7 md:flex-nowrap gap-[1%] p-2 m-2 max-w-xl w-full ">
                {params.skills.map((skill, index) => (
                  <SelectItem
                    key={index}
                    value={skill.id}
                    {...register("cvSkills")}
                  >
                    {skill.skill}
                  </SelectItem>
                ))}

                <Button
                  className="m-10 border-default-300 text-white"
                  color="success"
                  size="md"
                  type="submit"
                >
                  Add Job
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default CreateJobCard;
