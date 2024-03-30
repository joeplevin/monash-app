import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { id, firstName, lastName, email, password, role } = req.body; // Extract fields from request body

    console.log('Received PUT request to update user with id:', id);
    console.log('Request body:', req.body);

    try {
      const updatedUser = await prisma.user.update({
        where: { id }, // Use the extracted id in the where clause
        data: {
          firstName,
          lastName,
          email,
          password,
          role,
        },
      });

      console.log('Updated user:', updatedUser);

      res.status(200).json(updatedUser);
    } catch (error) {
      console.error('Error updating user:', error);
      if (error.code === 'P2025') {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(500).json({ error: 'Failed to update user' });
      }
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

