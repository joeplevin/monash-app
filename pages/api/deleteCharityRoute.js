// Import PrismaClient
import { PrismaClient } from '@prisma/client';

// Instantiate PrismaClient
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    try {
      const { id } = req.query; // Charity ID from URL query parameters
      if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'Invalid charity ID' });
      }

      const charity = await prisma.charity.findUnique({
        where: { id },
      });

      if (!charity) {
        return res.status(404).json({ error: 'Charity not found' });
      }

      await prisma.charity.delete({
        where: { id },
      });

      return res.status(200).json({ message: 'Charity deleted successfully' });
    } catch (error) {
      console.error('Error deleting charity:', error);
      return res.status(500).json({ error: 'Failed to delete charity' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
