"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { z } from "zod";
import { toast } from "react-toastify";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const FormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string({
    required_error: "Please enter a password",
  }),
});

const SigninForm = (params) => {
  console.log("params", params);
  const router = useRouter();
  const session = useSession();
  const [visiblePass, setVisiblePass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(FormSchema) });

  const onSubmit = async (data) => {
    const result = await signIn("credentials", {
      redirect: false,
      username: data.email,
      password: data.password,
    });
    if (!result?.ok) {
      toast.error(result?.error);
      return;
    }
    toast.success("Signed in successfully");
    router.push(params.callbackUrl ? params.callbackUrl : "/");
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 p-2 border rounded-md"
      >
        <div className="text-white text-center">Sign In Form</div>
        <div className="p-2 flex flex-col gap-2">
          <Input
            label="Email"
            {...register("email")}
            errorMessage={errors.email?.message}
          />
          <Input
            label="Password"
            type={visiblePass ? "text" : "password"}
            {...register("password")}
            errorMessage={errors.password?.message}
            endContent={
              <button
                type="button"
                onClick={() => setVisiblePass((prev) => !prev)}
              >
                {visiblePass ? (
                  <EyeIcon className="w-4" />
                ) : (
                  <EyeSlashIcon className="w-4" />
                )}
              </button>
            }
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <Button
            color="primary"
            type="submit"
            disabled={isSubmitting}
            isLoading={isSubmitting}
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default SigninForm;
