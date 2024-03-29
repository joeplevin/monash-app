import ResetPasswordForm from "@/app/components/auth/ResetPasswordForm";
import { verifyJwt } from "@/lib/jwt";
import React from "react";

const ResetPasswordPage = ({ params }) => {
  const payload = verifyJwt(params.jwt);
  if (!payload) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500 text-2xl">
        Invalid or expired token
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <ResetPasswordForm jwtUserId={params.jwt} />
    </div>
  );
};

export default ResetPasswordPage;
