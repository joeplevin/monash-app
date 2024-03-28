"use server";
import prisma from "@/lib/prisma";

export const updateUserDetails = async (user) => {
  console.log("user id update", user.id);
  try {
    const res = await prisma.user.update({
      where: { id: user.id },
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        role: user.role,
        // password: user.password,
      },
    });
    return res;
  } catch (error) {
    console.error("Error updating user details:", error);
    throw error;
  }
};
