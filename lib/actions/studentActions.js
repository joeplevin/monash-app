import prisma from "../prisma";

export const getStudents = async (req, res) => {
  const students = await prisma.student.findMany().select({
    id: true,
    userId: true,
    Cvs: true,
    Jobs: true,
  });
  res.json(students);
};

export const getStudent = async (req, res) => {
  const { id } = req.query;
  const student = await prisma.student.findUnique({
    where: { id: parseInt(id) },
    include: {
      id: true,
      userId: true,
      Cvs: true,
      Jobs: true,
    },
  });
  res.json(student);
};

export const createStudent = async (req, res) => {
  const { userId } = req.body;
  const student = await prisma.student.create({
    data: {
      userId: userId,
    },
  });
  res.json(student);
};

export const updateStudent = async (req, res) => {
  const { id } = req.query;
  const { userId } = req.body;
  const student = await prisma.student.update({
    where: { id: parseInt(id) },
    data: {
      userId: userId,
    },
  });
  res.json(student);
};

export const deleteStudent = async (req, res) => {
  const { id } = req.query;
  const student = await prisma.student.delete({
    where: { id: parseInt(id) },
  });
  res.json(student);
};

export const getStudentCv = async (req, res) => {
  const { id } = req.query;
  const student = await prisma.student.findUnique({
    where: { id: parseInt(id) },
    include: {
      Cvs: true,
    },
  });
  res.json(student.Cvs);
};

export const getStudentJobs = async (req, res) => {
  const { id } = req.query;
  const student = await prisma.student.findUnique({
    where: { id: parseInt(id) },
    include: {
      Jobs: true,
    },
  });
  res.json(student.Jobs);
};

export const addJobToStudent = async (req, res) => {
  const { id } = req.query;
  const { jobId } = req.body;
  const student = await prisma.student.update({
    where: { id: parseInt(id) },
    data: {
      Jobs: {
        connect: { id: jobId },
      },
    },
  });
  res.json(student);
};
