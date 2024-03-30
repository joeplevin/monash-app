import { PrismaClient } from '@prisma/client';
import { createCharityDetails } from '@/lib/actions/charityActions';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, description, location } = req.body;
      
      // Validate request body
      if (!name || !description || !location) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Create the charity using the createCharity function
      const newCharity = await createCharityDetails({ name, description, location });

      res.status(201).json(newCharity);
    } catch (error) {
      console.error('Error creating charity:', error);
      res.status(500).json({ error: 'Error creating charity' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}