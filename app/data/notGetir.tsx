import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function getNotes() {
  // Prisma sorgusunu kullanarak notları alıyoruz
  const topNotes = await db.s9.findMany({
    orderBy: {
      views: "desc", // En fazla görüntülenen 6 notu alıyoruz
    },
    take: 6, // Sadece 6 not alıyoruz
  });

  return topNotes; // Veriyi döndürüyoruz
}
