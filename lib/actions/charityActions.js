"use server";

import { user } from "@nextui-org/react";
import prisma from "../prisma";

export async function createJob(charity) {
  try {
    // const connectOrCreate = job.cvSkills.map((skill) => ({
    //   where: {
    //     name: skill,
    //   },
    // }));

    const result = await prisma.job.create({
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

export async function deleteJob(job, charity) {
  console.log("job from deleteJob", job, charity);
  try {
    const result = await prisma.job.delete({
      where: {
        id: job.id,
      },
    });
    return result;
  } catch (error) {
    console.log("error deleting job", error);
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
      include: {
        cvSkills: true,
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
            Cv: {
              include: {
                CvSkills: true,
              },
            },
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

export async function getJobApplicationbyJobId(id) {
  try {
    const jobApplication = prisma.Applications.findMany({
      where: {
        jobId: id,
      },
      include: {
        student: {
          include: {
            user: true,
            Cv: {
              include: {
                CvSkills: true,
              },
            },
          },
        },
      },
    });
    return jobApplication;
  } catch (error) {
    console.log("error getting job applications by job id", error);
    throw error;
  }
}

export async function updateStudentsApplicationsStatus(data, id) {
  try {
    const result = prisma.Applications.update({
      where: {
        id: id,
      },
      data: {
        applicationStatus: data.applicationStatus,
      },
    });
    return result;
  } catch (error) {
    console.log("error updating student application status", error);
    throw error;
  }
}

export async function getCvSkills() {
  try {
    const cvSkills = await prisma.CvSkills.findMany({});
    return cvSkills;
  } catch (error) {
    console.log("error getting cv skills", error);
    throw error;
  }
}

export async function approveApplication(applicationId) {
  try {
    const result = prisma.Applications.update({
      where: {
        id: applicationId,
      },
      data: {
        applicationStatus: "approved",
      },
    });
    return result;
  } catch (error) {
    console.log("error approving application", error);
    throw error;
  }
}

export async function rejectApplication(applicationId) {
  try {
    const result = prisma.Applications.update({
      where: {
        id: applicationId,
      },
      data: {
        applicationStatus: "rejected",
      },
    });
    return result;
  } catch (error) {
    console.log("error rejecting application", error);
    throw error;
  }
}
