"use server";

import prisma from "../prisma";

export async function createJob(data) {
  try {
    const result = prisma.job.create({
      data: {
        ...job,
        charity: data.charity,
      },
    });
    return result;
  } catch (error) {
    console.log("error creating job", error);
    throw error;
  }
}

export async function getCharity(userId) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      return "user not found";
    }
    const charity = await prisma.charity.findUnique({
      where: {
        userId: userId,
      },
    });
    console.log("charity from getCharity", charity);
    return charity;
  } catch (error) {
    console.log("Error getting charity:", error);
  }
}

export async function updateCharity(data, id) {
  try {
    const result = prisma.charity.update({
      where: {
        id: id,
      },
      data: {
        name: data.name,
        description: data.description,
        location: data.location,
      },
    });
    return result;
  } catch (error) {
    console.log("error updating charity", error);
    throw error;
  }
}
