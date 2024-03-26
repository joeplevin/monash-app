const { PrismaClient } = require("@prisma/client");

// Ensure Prisma client is a singleton
let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient(); // Create new instance for production
} else {
  // In development, reuse existing instance (if it exists) to prevent memory leaks
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}
export default prisma;
