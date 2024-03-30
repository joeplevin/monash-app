"use server";

import { user } from "@nextui-org/react";
import prisma from "../prisma";

export async function createJob(job, charity) {
  console.log("job from createJob", job, charity);
  try {
    const result = prisma.job.create({
      data: {
        title: job.title,
        description: job.description,
        location: job.location,
        charity: {
          connect: {
            id: charity.charity.id,
          },
        },
      },
    });
    return result;
  } catch (error) {
    console.log("error creating job", error);
    throw error;
  }
}
export async function getJob(id) {
  console.log("id from getJob", id);
  try {
    const job = prisma.job.findUnique({
      where: {
        id: id,
      },
    });
    console.log("result from getJob", job);
    return job;
  } catch (error) {
    console.log("error getting job", error);
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

export async function updateJob(data, id) {
  try {
    const result = prisma.job.update({
      where: {
        id: id,
      },
      data: {
        title: data.title,
        description: data.description,
        location: data.location,
      },
    });
    return result;
  } catch (error) {
    console.log("error updating job", error);
    throw error;
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
export async function getCharityJobs(id) {
  try {
    const charityJobs = prisma.job.findMany({
      where: {
        charityId: id,
      },
    });
    return charityJobs;
  } catch (error) {
    console.log("error getting charity jobs", error);
    throw error;
  }
}

export async function getJobApplications(jobId) {
  try {
    const jobApplications = prisma.Applications.findMany({
      where: {
        jobId: jobId,
      },
      include: {
        student: {
          include: {
            user: true,
            Cv: true,
          },
        },
      },
    });
    return jobApplications;
  } catch (error) {
    console.log("error getting job applications", error);
    throw error;
  }
}
