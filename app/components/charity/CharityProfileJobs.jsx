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

const CharityProfileJobsSchema = z.object({
  name: z.string(),

  description: z.string(),

  location: z.string(),
});

const CharityProfileJobsDisplay = (charity) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CharityProfileJobsSchema),
  });

  const router = useRouter();

  return (
    <>
      <h1>
        <center>
          <b>Charity Profile Jobs</b>
        </center>
      </h1>
      <br></br>
      <br></br>
      <div className="flex justify-center">
        <Card className=" flex flex-wrap justify-center p-5 w-[900px] h-[1000px] right-[40px]">
          <h1>
            <center>Your Charity</center>
          </h1>
          <div className="flex flex-wrap justify-center p-5">
            <>
              <div className="flex flex-row justify-center w-[400px]">
                <Card className="w-96 h-90 m-2 justify-center">
                  <CardHeader className="absolute top-1 flex-col items-start"></CardHeader>
                  <div className="mb-10">
                    <CardBody>
                      <p className="text-large text-center">{charity.name}</p>
                      <br></br>
                      <p className="text-md">{charity.description}</p>
                      <br></br>
                      <br></br>
                      <p className="text-md">{charity.location}</p>
                    </CardBody>
                  </div>
                </Card>
              </div>
            </>
          </div>
        </Card>
        <div className="flex justify-center">
          <Card className="flex flex-wrap justify-center p-5 w-[900px] h-[1000px] left-[40px] ">
            <h1>
              <center>Your Jobs</center>
            </h1>
            <div className="flex flex-wrap justify-center p-5">
              <>
                <div className="flex flex-row w-[400px] left-[900px]">
                  <Card className="w-96 h-90 m-2 justify-center">
                    <CardHeader className="absolute top-1 flex-col items-start"></CardHeader>
                    <div className="mb-10">
                      <CardBody>
                        <p className="text-large text-center">{}</p>
                        <br></br>
                        <p className="text-md">{}</p>
                        <br></br>
                        <br></br>
                        <p className="text-md">{}</p>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CharityProfileJobsDisplay;
