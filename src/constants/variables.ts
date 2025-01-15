import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const baseURLAPI = process.env.NEXT_PUBLIC_API_URL;

export { prisma, baseURLAPI };
