// Import PrismaClient
import { PrismaClient } from '@prisma/client';

// Instantiate PrismaClient
const prisma = new PrismaClient();

// Define the handler function for the createAdminUserRoute endpoint
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { firstName, lastName, email, password, role, phone } = req.body;
      const newAdminUser = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password,
          role,
          phone,
          Admin: {
            create: {}
          }
        },
        include: {
          Admin: true
        }
      });
      res.status(201).json(newAdminUser);
    } catch (error) {
      console.error('Error creating admin user:', error);
      res.status(500).json({ error: 'Error creating admin user' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
