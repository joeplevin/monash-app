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
import { updateCharity } from "@/lib/actions/charityActions";

const CharityEditProfileSchema = z.object({
  name: z
    .string()
    .min(2, "Edited Title is too short")
    .max(50, "Edited Title is too long")
    .regex(
      new RegExp("^[a-zA-Z ]+$"),
      "First name must contain only letters and spaces"
    ),
  description: z
    .string()
    .min(10, "Edited Job Description is too short")
    .max(200, "Edited Job Description is too long"),

  location: z
    .string()
    .min(10, "Edited Job location is too short")
    .max(200, "Edited Job location is too long"),
});

const EditCharityProfileForm = (charity) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CharityEditProfileSchema),
  });

  const router = useRouter();

  const saveProfile = async (data) => {
    const res = await updateCharity(data, charity.charity.id);
  };

  return (
    <>
      <div className="flex flex-col grid-rows-2 p-5">
        <br />
        <br />

        <Card className="flex flex-col grid-rows-2 p-5 w-[850px] h-90 left-[520px]">
          <h1>
            <center>
              <b>
                <u>Edit your Charity</u>
              </b>
            </center>
          </h1>
          <CardBody className="w-[850px] h-90 left-[100px]">
            <form onSubmit={handleSubmit(saveProfile)}>
              <Input
                errorMessage={errors.name?.message}
                className=" flex-wrap md:flex-nowrap gap-4 p-2 m-5 max-w-xl"
                label="Charity Name"
                defaultValue={charity.charity.name}
                {...register("name")}
              />

              <Input
                errorMessage={errors.description?.message}
                className="flex w-full flex-wrap md:flex-nowrap gap-4 p-2 m-5 max-w-xl"
                label="Charity Description"
                defaultValue={charity.charity.description}
                {...register("description")}
              />

              <Input
                errorMessage={errors.location?.message}
                className="flex w-full flex-wrap md:flex-nowrap gap-4 p-2 m-5 max-w-xl"
                label="Charity Location"
                defaultValue={charity.charity.location}
                {...register("location")}
              />

              <Button
                className="m-5 border-default-300 text-white"
                color="success"
                size="md"
                type="submit"
              >
                Save Changes
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default EditCharityProfileForm;
