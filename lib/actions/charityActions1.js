"use server";
import prisma from "../prisma";

export async function getCharitybyUser(userId) {
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

export async function getCharity(charityId) {
  try {
    const charity = await prisma.charity.findUnique({
      where: {
        id: charityId,
      },
      select: {
        id: true,
        name: true,
        description: true,
        location: true,
        jobs: {
          select: {
            id: true,
            title: true,
            description: true,
            charity: {
              select: {
                name: true,
              },
            },
            cvSkills: {
              select: {
                skill: true,
              },
            },
            applicants: {
              select: {
                studentId: true,
                applicationStatus: true,
              },
            },
          },
        },
      },
    });
    return charity;
  } catch (error) {
    console.log("Error getting charity:", error);
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
