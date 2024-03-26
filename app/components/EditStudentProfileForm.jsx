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
import PasswordStrength from "./PasswordStrength";
import { updateUser } from "@/lib/actions/authActions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

// find a way to import cvs, jobs & certificates
// display them in the form
// delete/add new in the form
// import { getStudent } from "@/lib/actions/studentActions";

const StudentProfileSchema = z
  .object({
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
    password: z
      .string()
      .min(8, "Password is too short")
      .max(50, "Password is too long"),
    confirmPassword: z
      .string()
      .min(8, "Password is too short")
      .max(50, "Password is too long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const EditStudentProfileForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: async () => {
      const student = await getStudent();
      return {
        firstName: student.user.firstName,
        lastName: student.user.lastName,
        email: student.user.email,
        phone: student.user.phone,
        password: student.user.password,
        confirmPassword: student.user.password,
        cv: student.Cv,
        certificates: student.Certificates,
        jobs: student.Jobs,
      };
    },
    resolver: zodResolver(StudentProfileSchema),
  });
  const router = useRouter();
  const [passStrength, setPassStrength] = useState(0);
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  useEffect(() => {
    setPassStrength(passwordStrength(watch().password).id);
  }, [watch().password]);
  const togglePassVisibility = () => setIsVisiblePass((prev) => !prev);

  const submitStudent = async (data) => {
    data.role = role;
    const { confirmPassword, ...user } = data;
    console.log(user);
    try {
      const res = await updateUser(user);
      toast.success("Saved successfully");
      router.push("/student");
    } catch (error) {
      toast.error("Error saving student profile");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(submitStudent)}
      className="grid grid-cols-2 gap-3 p-2 place-self-stretch shadow border rounded-md"
    >
      <Input
        errorMessage={errors.firstName?.message}
        isInvalid={!!errors.firstName}
        {...register("firstName")}
        label="First Name"
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        errorMessage={errors.lastName?.message}
        isInvalid={!!errors.lastName}
        {...register("lastName")}
        label="Last Name"
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        errorMessage={errors.email?.message}
        isInvalid={!!errors.email}
        {...register("email")}
        className="col-span-2"
        label="Email"
        startContent={<EnvelopeIcon className="w-4" />}
      />
      <Input
        errorMessage={errors.phone?.message}
        isInvalid={!!errors.phone}
        {...register("phone")}
        className="col-span-2"
        label="Phone"
        startContent={<PhoneIcon className="w-4" />}
      />
      <Input
        errorMessage={errors.password?.message}
        isInvalid={!!errors.password}
        {...register("password")}
        className="col-span-2"
        label="Password"
        type={isVisiblePass ? "text" : "password"}
        startContent={<KeyIcon className="w-4" />}
        endContent={
          isVisiblePass ? (
            <EyeSlashIcon
              color="white"
              className="w-4 cursor-pointer"
              onClick={togglePassVisibility}
            />
          ) : (
            <EyeIcon
              color="white"
              className="w-4 cursor-pointer"
              onClick={togglePassVisibility}
            />
          )
        }
      />
      <PasswordStrength passStrength={passStrength} />
      <Input
        errorMessage={errors.confirmPassword?.message}
        isInvalid={!!errors.confirmPassword}
        {...register("confirmPassword")}
        className="col-span-2"
        label="Confirm Password"
        type={isVisiblePass ? "text" : "password"}
        startContent={<KeyIcon className="w-4" />}
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
