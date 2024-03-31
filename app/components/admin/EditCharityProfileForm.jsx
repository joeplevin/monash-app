"use client";
import { Input, Checkbox, Button } from "@nextui-org/react";
import Link from "next/link";
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
import { passwordStrength } from "check-password-strength";
import PasswordStrength from "../auth/PasswordStrength";
import { updateCharityDetails } from "@/lib/actions/charityActions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { getCharity } from "@/lib/actions/charityActions";

// find a way to import cvs, jobs & certificates
// display them in the form
// delete/add new in the form
// import { getStudent } from "@/lib/actions/studentActions";

const CharityProfileSchema = z.object({
  name: z
    .string()
    .min(2, "name is too short")
    .max(200, "name is too long")
    .regex(
      new RegExp("^[a-zA-Z ]+$"),
      "name must contain only letters and spaces"
    ),
  description: z
    .string()
    .min(2, "Description is too short")
    .max(500, "Description is too long")
    .regex(
      new RegExp("^[a-zA-Z ]+$"),
      "Description must contain only letters and spaces"
    ),
    location: z
    .string()
});

const EditCharityProfileForm = ({charity}) => {
 
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CharityProfileSchema),
  });
  const router = useRouter();

  const submitEditCharity = async (data) => {
    data.role = "charity";
    data.id = charity.id;
    

   
    const { ...user } = data;
   
    try {
      const res = await updateCharityDetails(data);
      toast.success("Saved successfully");
      router.push("/admin/create-charity");
    } catch (error) {
      toast.error("Error saving charity profile");
     
    }
  };
  return (
    <form
      onSubmit={handleSubmit(submitEditCharity)}
      className="grid grid-cols-2 gap-3 p-2 place-self-stretch shadow border rounded-md"
    >
      <Input
        errorMessage={errors.name?.message}
        isInvalid={!!errors.name}
        {...register("name")}
        label="Name"
        defaultValue={charity.name}
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        errorMessage={errors.description?.message}
        isInvalid={!!errors.description}
        {...register("description")}
        label="Description"
        defaultValue={charity.description}
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        errorMessage={errors.location?.message}
        isInvalid={!!errors.location}
        {...register("location")}
        label="Location"
        defaultValue={charity.location}
        startContent={<UserIcon className="w-4" />}
      />
      
      <div className="flex justify-center col-span-2">
        <Button className="w-48" color="primary" type="submit">
          Update
        </Button>
      </div>
    </form>
  );
};

export default EditCharityProfileForm;
