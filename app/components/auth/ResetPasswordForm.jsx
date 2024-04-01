"use client";
import { resolve } from "path";
import React from "react";
import { z } from "zod";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { passwordStrength } from "check-password-strength";
import { useEffect } from "react";
import PasswordStrength from "./PasswordStrength";
import { resetPassword } from "@/lib/actions/authActions";
import { toast } from "react-toastify";

const FormSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password must be less than 100 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const ResetPasswordForm = ({ jwtUserId }) => {
  const [visiblePass, setVisiblePass] = useState(false);
  const [passStrength, setPassStrength] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(FormSchema) });
  useEffect(() => {
    setPassStrength(passwordStrength(watch().password).id);
  }, [watch().password]);
  const resetPass = async (data) => {
    try {
      const result = await resetPassword(jwtUserId, data.password);
      if (result === "success") {
        toast.success("Password reset successfully");
        reset();
      }
    } catch (error) {
      toast.error("Error resetting password");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(resetPass)}
      className="flex flex-col gap-2 p-2 m-2 border rounded-md shadow"
    >
      <div className="text-center p-2"> Reset Your Password</div>
      <Input
        label="Password"
        type={visiblePass ? "text" : "password"}
        {...register("password")}
        errorMessage={errors.confirmPassword?.message}
        endContent={
          <button type="button" onClick={() => setVisiblePass((prev) => !prev)}>
            {visiblePass ? (
              <EyeIcon color="white" className="w-4" />
            ) : (
              <EyeSlashIcon color="white" className="w-4" />
            )}
          </button>
        }
      />
      <PasswordStrength passStrength={passStrength} />
      <Input
        label="Confirm Password"
        type={visiblePass ? "text" : "password"}
        {...register("confirmPassword")}
        errorMessage={errors.confirmPassword?.message}
      />
      <div className="flex justify-center">
        <Button
          type="submit"
          isLoading={isSubmitting}
          disabled={isSubmitting}
          color="primary"
        >
          {isSubmitting ? "Submitting" : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
