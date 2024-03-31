export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { id } = req.query; // User ID from URL query parameters

    try {
      await prisma.user.delete({
        where: {
          id: id // Use user's id as the unique identifier
        },
      });

      res.status(200).json({ message: 'Admin user deleted successfully' });
    } catch (error) {
      console.error('Error deleting admin user:', error);
      res.status(500).json({ error: 'Failed to delete admin user' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
