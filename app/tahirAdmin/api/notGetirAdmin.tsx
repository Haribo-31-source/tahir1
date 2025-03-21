import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function adminApi(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const notes = await prisma.s9.findMany(
        { orderBy: { createdAt: "desc" }, take: 6 }
      );
      res.status(200).json(notes);
    } catch {
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}