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

export const createApplication = async (jobId, studentId) => {
  const application = await prisma.applications.create({
    data: {
      jobId: jobId,
      studentId: studentId,
      include: {
        Student: {
          select: {
            id: true,
            cv: {
              select: {
                id: true,
                cvUrl: true,
                fileName: true,
                CvSkills: {
                  select: {
                    id: true,
                    skill: true,
                  },
                },
              },
            },
          },
        },
      },
    },
  });
  return application;
};
