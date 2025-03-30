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

export async function getNotes1() {
  // Prisma sorgusunu kullanarak notları alıyoruz
  const topNotes1 = await db.s10.findMany({
    orderBy: {
      views: "desc", // En fazla görüntülenen 6 notu alıyoruz
    },
    take: 6, // Sadece 6 not alıyoruz
  });

  return topNotes1; // Veriyi döndürüyoruz
}

export async function getNotes2() {
  // Prisma sorgusunu kullanarak notları alıyoruz
  const topNotes2 = await db.s11.findMany({
    orderBy: {
      views: "desc", // En fazla görüntülenen 6 notu alıyoruz
    },
    take: 6, // Sadece 6 not alıyoruz
  });

  return topNotes2; // Veriyi döndürüyoruz
}

export async function getNotes3() {
  // Prisma sorgusunu kullanarak notları alıyoruz
  const topNotes3 = await db.s12.findMany({
    orderBy: {
      views: "desc", // En fazla görüntülenen 6 notu alıyoruz
    },
    take: 6, // Sadece 6 not alıyoruz
  });

  return topNotes3; // Veriyi döndürüyoruz
}


export async function deleteNote(id: number) {
  await db.s9.delete({
    where: {
      id,
    },
  });
  
}

export async function getNotes9() {
  const topNotes = await db.s9.findMany({
    orderBy: {
      createdAt: "desc", // En fazla görüntülenen 6 notu alıyoruz
    },
    take: 6, // Sadece 6 not alıyoruz
  });
  return topNotes;
}

export async function getNotes10() {
  const topNotes = await db.s10.findMany({
    orderBy: {
      createdAt: "desc", // En fazla görüntülenen 6 notu alıyoruz
    },
    take: 6, // Sadece 6 not alıyoruz
  });
  return topNotes;
}

export async function getNotes11() {
  const topNotes = await db.s11.findMany({
    orderBy: {
      createdAt: "desc", // En fazla görüntülenen 6 notu alıyoruz
    },
    take: 6, // Sadece 6 not alıyoruz
  });
  return topNotes;
}

export async function getNotes12() {
  const topNotes = await db.s12.findMany({
    orderBy: {
      createdAt: "desc", // En fazla görüntülenen 6 notu alıyoruz
    },
    take: 6, // Sadece 6 not alıyoruz
  });

  return topNotes;
}
