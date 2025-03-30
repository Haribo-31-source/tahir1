import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json(); // JSON verisini al
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: "ID gerekli" }, { status: 400 });
    }

    await db.s9.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: "Not başarıyla silindi" }, { status: 200 });
  } catch (error) {
    console.error("Silme hatası:", error);
    return NextResponse.json({ error: "Veri silinirken hata oluştu" }, { status: 500 });
  }
}
