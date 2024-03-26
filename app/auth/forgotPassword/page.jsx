"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input, Button } from "@nextui-org/react";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPassword } from "@/lib/actions/authActions";
import { toast } from "react-toastify";

const FormSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const ForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(FormSchema),
  });
  const submitRequest = async (data) => {
    try {
      const result = await forgotPassword(data.email);
      if (result) toast.success("Reset email sent");
      reset();
    } catch (error) {
      toast.error("Error sending reset email");
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center">
      <form
        className="flex flex-col gap-2 p-2 m-2 border rounded-md shadow"
        onSubmit={handleSubmit(submitRequest)}
      >
        <div className="text-center p-2"> Enter Your Email</div>
        <Input
          label="Email"
          {...register("email")}
          startContent={<EnvelopeIcon className="w-4" />}
          errorMessage={errors.email?.message}
        />
        <Button
          type="submit"
          isLoading={isSubmitting}
          disabled={isSubmitting}
          color="primary"
        >
          {isSubmitting ? "Submitting" : "Submit"}
        </Button>
      </form>
      <Image
        src={"/forgotPass.png"}
        width={500}
        height={500}
        className="col-span-2 place-self-center"
        alt="Forgot Password"
      />
    </div>
  );
};

export default ForgotPasswordPage;
