import { prisma } from '.prisma/client';

const prisma = new PrismaClient();

const createUser = async (req, res) => {
  try {
    const { user } = req.body;
    const databaseUser = await prisma.user.create({});
  } catch (error) {}
};

export default create;
