import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const db = new PrismaClient();

export async function PUT(req: Request) {
  try {
    const { id, title, content } = await req.json();

    if (!id || !title || !content) {
      return NextResponse.json({ error: "Eksik bilgi" }, { status: 400 });
    }

    const updatedNote = await db.s9.update({
      where: { id },
      data: { name: title, description: content },
    });

    return NextResponse.json(updatedNote);
  } catch (error) {
    console.error("Hata:", error);
    return NextResponse.json({ error: "Güncelleme hatası" }, { status: 500 });
  }
}
