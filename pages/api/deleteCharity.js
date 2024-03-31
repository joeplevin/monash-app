import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id } = req.query;

  try {
    await prisma.charity.delete({
      where: {
        id: parseInt(id),
      },
    });
    return res.status(200).json({ message: 'Charity deleted successfully' });
  } catch (error) {
    console.error('Error deleting charity:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
