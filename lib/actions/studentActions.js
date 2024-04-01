"use server";
import { get } from "http";
import prisma from "../prisma";
import { Certificate } from "crypto";
import { title } from "process";
import { connect } from "http2";
import { data } from "autoprefixer";

export const getStudents = async () => {
  const students = await prisma.student.findMany().select({
    id: true,
    userId: true,
    Cv: {
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
    Jobs: true,
  });
  res.json(students);
};

export const getStudent = async (userId) => {
  const student = await prisma.student.findUnique({
    where: { userId: userId },
    include: {
      Cv: {
        select: {
          id: true,
          fileName: true,
          cvUrl: true,
          CvSkills: {
            select: {
              id: true,
              skill: true,
            },
          },
        },
      },
      Certificates: {
        select: {
          certificateUrl: true,
          title: true,
        },
      },
      user: true,
      Jobs: true,
      Applicants: true,
    },
  });
  // student.Cv = await getStudentCV(student.userId);
  return student;
};

export const getStudentCV = async (studentId) => {
  const cv = await prisma.cv.findUnique({
    where: { studentId: studentId },
  });
  return cv;
};

//Query relations in prisma

export const getStudentUser = async (studentId) => {
  const user = await prisma.user.findUnique({
    where: { id: studentId },
  });
  return user;
};

export const createStudent = async (userId) => {
  const student = await prisma.student.create({
    data: {
      userId: userId,
    },
  });
  return student;
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

export const addCvSkill = async (cvId, skill) => {
  const cvSkill = await prisma.cv.update({
    where: { id: cvId },
    data: {
      CvSkills: {
        connect: { id: skill.id },
      },
    },
  });
  return cvSkill;
};
