import prisma from "@/lib/prisma";

export const getStudentApplications = async (userId) => {
  const applications = await prisma.applications.findMany({
    where: {
      studentId: userId,
    },
    select: {
      jobId: true,
      applicationStatus: true,
    },
  });
  return applications;
};

export const getStudentApplicationsForJob = async (userId, jobId) => {
  const applications = await prisma.applications.findMany({
    where: {
      studentId: userId,
      jobId: jobId,
    },
  });
  return applications;
};
