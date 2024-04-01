"use server";
import prisma from "../prisma";

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
    return charity;
  } catch (error) {
    console.log("Error getting charity:", error);
  }
}

export async function getJobs() {
  try {
    const jobs = await prisma.job.findMany({
      include: {
        cvSkills: {
          select: {
            skill: true,
          },
        },
      },
    });
    return jobs;
  } catch (error) {
    console.log("Error getting jobs:", error);
  }
}

export async function getJobsBySkills(skills) {
  const jobs = [];

  try {
    for (const skill of skills) {
      const jobsBySkill = await prisma.job.findMany({
        where: {
          cvSkills: {
            skill: skill,
          },
        },
      });
      jobs.push(...jobsBySkill);
    }
    return jobs;
  } catch (error) {
    console.log("Error getting jobs by skills:", error);
  }
}

export async function getCharities() {
  try {
    const charities = await prisma.charity.findMany();
    return charities;
  } catch (error) {
    console.log("Error getting charities:", error);
  }
}

export async function updateCharityUser(userId, charityId) {
  try {
    const charity = await prisma.charity.update({
      where: {
        id: charityId,
      },
      data: {
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    if (!charity) {
      return "charity not found";
    }
  } catch (error) {
    console.log("Error updating charity user:", error);
  }
  try {
    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        Charity: {
          connect: {
            id: charityId,
          },
        },
      },
    });
    return user;
  } catch (error) {
    console.log("Error updating charity user:", error);
  }
}

export async function getJob(id) {
  try {
    const job = await prisma.job.findUnique({
      where: {
        id: id,
      },
    });
    return job;
  } catch (error) {
    console.log("Error getting job:", error);
  }
}

export async function getCvSkillList() {
  try {
    const cvSkills = await prisma.cvSkills.findMany({
      select: {
        id: true,
        skill: true,
      },
    });
    return cvSkills;
  } catch (error) {
    console.log("Error getting cv skills:", error);
  }
}

export async function getCharityJobs(charityId) {
  try {
    const charityJobs = await prisma.job.findMany({
      where: {
        charityId: charityId,
      },
      include: {
        cvSkills: {
          select: {
            skill: true,
          },
        },
        student: {
          select: {
            id: true,
            user: {
              select: {
                firstName: true,
                lastName: true,
                email: true,
              },
            },
          },
        },
      },
    });
    return charityJobs;
  } catch (error) {
    console.log("Error getting charity jobs:", error);
  }
}

("use server");

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
