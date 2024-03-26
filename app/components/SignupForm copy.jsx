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
import { registerUser } from "@/lib/actions/authActions";
import { toast } from "react-toastify";

const SignupFormSchema = z
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

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignupFormSchema),
  });
  const [passStrength, setPassStrength] = useState(0);
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  useEffect(() => {
    setPassStrength(passwordStrength(watch().password).id);
  }, [watch().password]);
  const togglePassVisibility = () => setIsVisiblePass((prev) => !prev);
  const saveUser = async (data) => {
    const { confirmPassword, ...user } = data;
    try {
      const res = await registerUser(user);
      toast.success("User registered successfully");
    } catch (error) {
      toast.error("Error registering user");
    }
  };
  console.log("SignupForm");
  return (
    <form
      onSubmit={handleSubmit(saveUser)}
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

export default SignupForm;
