import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
import { Category, PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    const FormNote = formData.get("name") as string;
    const FormCategory = formData.get("category") as Category;
    const FormDescription = formData.get("description") as string;
    const sinif = formData.get("sinif") as string;

    // Resmi al ve kaydet
    const file = formData.get("image") as File | null;
    let imageUrl = "";

    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const filePath = join(process.cwd(), "public", file.name);
      await writeFile(filePath, buffer);
      
      imageUrl = `/uploads/${file.name}`; // Veritabanına kaydedilecek URL
    }

    // Hangi sınıfa kayıt yapacağını belirle
    if (sinif === "s9") {
      await db.s9.create({
        data: {
          name: FormNote,
          category: FormCategory,
          description: FormDescription,
          imageUrl: imageUrl, // Veritabanına kaydedilen resim URL'si
        },
      });
    }else     if (sinif === "s10") {
      await db.s10.create({
        data: {
          name: FormNote,
          category: FormCategory,
          description: FormDescription,
          imageUrl: imageUrl, // Veritabanına kaydedilen resim URL'si
        },
      });
    }else    if (sinif === "s11") {
      await db.s11.create({
        data: {
          name: FormNote,
          category: FormCategory,
          description: FormDescription,
          imageUrl: imageUrl, // Veritabanına kaydedilen resim URL'si
        },});
      }else    if (sinif === "s12") {
        await db.s12.create({
          data: {
            name: FormNote,
            category: FormCategory,
            description: FormDescription,
            imageUrl: imageUrl, // Veritabanına kaydedilen resim URL'si
          },});
        }

    return NextResponse.json({ success: true, message: "Not başarıyla yüklendi!" });
  } catch (error) {
    console.error("Hata oluştu:", error);
    return NextResponse.json({ success: false, message: "Bir hata oluştu." }, { status: 500 });
  }
}
