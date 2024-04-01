"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import prisma from "@/lib/prisma";
import crypto from "crypto";

// Generate a random file name
const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

// AWS S3 client
const s3 = new S3Client({
  region: process.env.AWS_S3_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

// Accepted file type
const acceptedType = "application/pdf";

const maxFileSize = 5 * 1024 * 1024; // 5MB

// Function to get signed URL for file upload
// Checksum is SHA256 hash of the file to ensure integrity
export async function getSignedURL(type, size, checksum, fileName) {
  //get user session from next-auth
  const session = await getServerSession(authOptions);
  //if no session, return failure
  if (!session) {
    return { failure: "You must be logged in to upload a file" };
  }
  // AWS S3 putObjectCommand
  const putObjectCommand = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    // Generate a random file name here for the key
    Key: generateFileName(),
    ContentType: type,
    ContentLength: size,
    ChecksumSHA256: checksum,
    Metadata: {
      // Add user id to the metadata
      userid: session.user.id,
    },
  });
  // Only accept PDF files less than 5MB
  if (acceptedType !== type) {
    return { failure: "Invalid file type" };
  }
  if (size > maxFileSize) {
    return { failure: "File size too large" };
  }

  // Get signed URL
  const signedURL = await getSignedUrl(s3, putObjectCommand, {
    expiresIn: 5000,
  });
  // Update the student's CV URL in the database
  const cvResult = await prisma.student.update({
    where: { userId: session.user.id },
    data: {
      Cv: {
        // upsert will create a new record if it doesn't exist
        upsert: {
          where: { studentId: session.user.id },
          update: {
            cvUrl: signedURL.split("?")[0],
            fileName: fileName,
          },
          create: {
            cvUrl: signedURL.split("?")[0],
          },
        },
      },
    },
    include: {
      Cv: true,
    },
  });

  // Return the signed URL and the CV id
  return {
    success: {
      url: signedURL,
      cvId: cvResult.Cv.id,
    },
  };
}
