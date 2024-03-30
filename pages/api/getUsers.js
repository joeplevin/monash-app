// Import PrismaClient
import { PrismaClient } from '@prisma/client';

// Instantiate PrismaClient
const prisma = new PrismaClient();

// Define the handler function for the getUsers endpoint
export default async function handler(req, res) {
  try {
    // Fetch all users from the database
    const users = await prisma.user.findMany();

    // Send the fetched users as JSON response
    res.status(200).json(users);
  } catch (error) {
    // If an error occurs, send an error response
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Error fetching users' });
  }
}
