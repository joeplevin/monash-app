export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    // Extract the user ID from the URL query parameters
    const { id } = req.query;

    try {
      // Attempt to delete the user using Prisma
      await prisma.user.delete({
        where: {
          id: id // Use user's id as the unique identifier
        },
      });

      // If deletion is successful, send a success response
      res.status(200).json({ message: 'Admin user deleted successfully' });
    } catch (error) {
      // If an error occurs during deletion, log the error and send an error response
      console.error('Error deleting admin user:', error);
      res.status(500).json({ error: 'Failed to delete admin user' });
    }
  } else {
    // If the HTTP method is not DELETE, send a "Method not allowed" response
    res.status(405).json({ error: 'Method not allowed' });
  }
}

