import prisma from "@/app/lib/prisma";

export const getApplications = async (studentId) => {
  const applications = await prisma.application.findMany({
    where: {
      studentId: studentId,
    },
  });
  return applications;
};
