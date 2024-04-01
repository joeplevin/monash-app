// Import PrismaClient
import { PrismaClient } from '@prisma/client';

// Instantiate PrismaClient
const prisma = new PrismaClient();

// Define the handler function for the getCharities endpoint
export default async function handler(req, res) {
  try {
    // Fetch all charities from the database
    const charities = await prisma.charity.findMany();

    // Send the fetched charities as JSON response
    res.status(200).json(charities);
  } catch (error) {
    // If an error occurs, send an error response
    console.error('Error fetching charities:', error);
    res.status(500).json({ error: 'Error fetching charities' });
  }
}
