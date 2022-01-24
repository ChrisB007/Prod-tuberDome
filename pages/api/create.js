import { prisma } from '.prisma/client';
import { Prisma } from 'next-auth/adapters';

const prisma = new PrismaClient();

const createUser = async (req, res) => {
  try {
    const { user } = req.body;
    const databaseUser = await Prisma.user.create({});
  } catch (error) {}
};

export default create;
