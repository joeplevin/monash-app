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
import { updateUserDetails } from "@/lib/actions/userActions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { getStudent } from "@/lib/actions/studentActions";

// find a way to import cvs, jobs & certificates
// display them in the form
// delete/add new in the form
// import { getStudent } from "@/lib/actions/studentActions";

const StudentProfileSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name is too short")
    .max(50, "First name is too long")
    .regex(
      new RegExp("^[a-zA-Z ]+$"),
      "First name must contain only letters and spaces"
    ),
  lastName: z
    .string()
    .min(2, "Last name is too short")
    .max(50, "Last name is too long")
    .regex(
      new RegExp("^[a-zA-Z ]+$"),
      "Last name must contain only letters and spaces"
    ),
  email: z.string().email("Invalid email address"),
  phone: z.string().refine(validator.isMobilePhone, "Invalid phone number"),
});

const EditStudentProfileForm = (student) => {
  console.log("student", student);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(StudentProfileSchema),
  });
  const router = useRouter();

  const submitEditStudent = async (data) => {
    data.role = "student";
    data.id = student.student.user.id;
    data.email = student.student.user.email;
    // data.password = student.student.user.password;

    console.log("profile edit data", data);
    const { ...user } = data;
    console.log("this is the fucking data", data);
    try {
      const res = await updateUserDetails(user);
      toast.success("Saved successfully");
      router.push("/student");
    } catch (error) {
      toast.error("Error saving student profile");
      console.log("profile error", error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(submitEditStudent)}
      className="grid grid-cols-2 gap-3 p-2 place-self-stretch shadow border rounded-md"
    >
      <Input
        errorMessage={errors.firstName?.message}
        isInvalid={!!errors.firstName}
        {...register("firstName")}
        label="First Name"
        defaultValue={student.student.user.firstName}
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        errorMessage={errors.lastName?.message}
        isInvalid={!!errors.lastName}
        {...register("lastName")}
        label="Last Name"
        defaultValue={student.student.user.lastName}
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        errorMessage={errors.email?.message}
        isInvalid={!!errors.email}
        {...register("email")}
        className="col-span-2"
        label="Email"
        defaultValue={student.student.user.email}
        startContent={<EnvelopeIcon className="w-4" />}
      />
      <Input
        errorMessage={errors.phone?.message}
        isInvalid={!!errors.phone}
        {...register("phone")}
        className="col-span-2"
        label="Phone"
        defaultValue={student.student.user.phone}
        startContent={<PhoneIcon className="w-4" />}
      />
      <div className="flex justify-center col-span-2">
        <Button className="w-48" color="primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default EditStudentProfileForm;
