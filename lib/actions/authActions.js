"use server";
import prisma from "../prisma";
import bcrypt from "bcrypt";
import {
  sendMail,
  compileActivationTemplate,
  compileResetTemplate,
} from "../mail";
import { signJwt, verifyJwt } from "../jwt";
export async function registerUser(user) {
  try {
    const roles = ['student', 'admin'];
    const result = await prisma.user.create({
      data: {
        ...user,
        password: await bcrypt.hash(user.password, 10),
        role: roles
      },
    });
    const jwtUserId = signJwt({ id: result.id });
    const activationUrl = `${process.env.NEXTAUTH_URL}/auth/activation/${jwtUserId}`;
    const body = compileActivationTemplate(user.firstName, activationUrl);
    await sendMail(user.email, "Activate your account", body);
    return result;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error; // Rethrow the error for the caller to handle
  }
}

export const activateUser = async (jwtUserId) => {
  try {
    const payload = verifyJwt(jwtUserId);
    const userId = payload?.id;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return "user not found";
    }
    if (user.emailVerified) {
      return "user already activated";
    }
    const result = await prisma.user.update({
      where: { id: userId },
      data: { emailVerified: new Date() },
    });
    return "success";
  } catch (error) {
    console.error("Error activating user:", error);
    throw error;
  }
};

export async function forgotPassword(email) {
  try {
    const user = await prisma.user.findUnique({ where: { email: email } });
    if (!user) {
      throw new Error("user not found");
    }
    const jwtUserId = signJwt({ id: user.id });
    const resetUrl = `${process.env.NEXTAUTH_URL}/auth/resetPassword/${jwtUserId}`;
    const body = compileResetTemplate(user.firstName, resetUrl);
    const sendResult = await sendMail(user.email, "Reset Password", body);
    return sendResult;
  } catch (error) {
    console.error("Error sending reset email:", error);
    throw error;
  }
}

export async function resetPassword(jwtUserId, password) {
  try {
    const payload = verifyJwt(jwtUserId);
    if (!payload) {
      return "user not found";
    }
    const userId = payload.id;
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return "user not found";
    }
    const result = await prisma.user.update({
      where: { id: userId },
      data: { password: await bcrypt.hash(password, 10) },
    });
    if (result) return "success";
  } catch (error) {
    console.error("Error resetting password:", error);
    throw error;
  }
}
