import prisma from "@/lib/prisma";

export const getJobs = async () => {
  const jobs = await prisma.job.findMany({
    include: {
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
  });
  return jobs;
};

export const getJob = async (id) => {
  const job = await prisma.job.findUnique({
    where: { id: id },
    include: {
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
  });
  return job;
};

export const getStudentJobs = async (studentId) => {
  const jobs = await prisma.job.findMany({
    where: { studentId: studentId },
    include: {
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
  });
  return jobs;
};
