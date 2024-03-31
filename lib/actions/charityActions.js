"use server";
import prisma from "../../lib/prisma";

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
export async function getCharityById(charityId) {
  console.log("charityId", charityId);
  try {
    const charity = prisma.Charity.findUnique({
      where: {
        id: charityId,
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

export async function updateCharityDetails(charity) {
  console.log("update charity", charity);
  try {
    const updatedCharity = await prisma.charity.update({
      where: {
        id: charity.id,
      },
      data: {
        name: charity.name,
        description: charity.description,
        location: charity.location,
      },
    });
    return updatedCharity;
  } catch (error) {
    console.log("Error updating charity:", error);
  }
}

export async function createCharityDetails(charity, userId) {
  try {
    const newCharity = await prisma.charity.create({
      data: {
        name: charity.name,
        description: charity.description,
        location: charity.location,
        user: { connect: { id: userId } } // Connect the charity to the user
      }
    });
    return newCharity;
  } catch (error) {
    console.error('Error creating charity:', error);
    throw new Error('Error creating charity');
  }
}

const handleCharityDelete = async (charityId) => {
  try {
    const response = await fetch(`/api/deleteCharity/${charityId}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      // Handle successful deletion
      console.log('Charity deleted successfully');
    } else {
      // Handle deletion failure
      console.error('Failed to delete charity');
    }
  } catch (error) {
    console.error('Error deleting charity:', error);
  }
};

