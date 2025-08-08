import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

prisma.$connect(); // <-- ¿Este te marca error?
