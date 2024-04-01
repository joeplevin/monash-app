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
    console.log("charity from getCharity", charity);
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
    const cvSkills = await prisma.cvSkill.findMany({
      select: {
        skill: true,
      },
    });
    return cvSkills;
  } catch (error) {
    console.log("Error getting cv skills:", error);
  }
}
