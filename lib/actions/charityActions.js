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
  } catch (error) {}
}
export async function getCharityById(charityId) {
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
  } catch (error) {}
}

export async function getCharities() {
  try {
    const charities = await prisma.charity.findMany();
    return charities;
  } catch (error) {}
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
  } catch (error) {}
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
  } catch (error) {}
}

export async function updateCharityDetails(charity) {
  try {
    const job = await prisma.job.findUnique({
      where: {
        id: id,
      },
    });
    return job;
  } catch (error) {}
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
