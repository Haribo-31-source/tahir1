import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const db = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { id } = await req.json(); // URL'den sınıf bilgisini al

    if (!id) return NextResponse.json({ error: "ID gerekli" }, { status: 400 });

    const note = await db.s12.findUnique({
      where: { id },
    });

      
    if (!note) return NextResponse.json({ error: "Not bulunamadı" }, { status: 404 });

    return NextResponse.json(note);

  } catch (error) {
    console.error("Hata:", error);
    return NextResponse.json({ error: "Veri çekme hatası" }, { status: 500 });
  }
}
