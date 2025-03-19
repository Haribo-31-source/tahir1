"use server";

import { PrismaClient } from '@prisma/client'; // Prisma Client doğru şekilde import edilmeli
const db = new PrismaClient(); // Prisma Client başlatma

export async function notYukle(formData: FormData) {
    // Form verilerinden değerler alınıyor
    const notAdi = formData.get("name") as string | null;
    const notDetay = formData.get("prompt") as string | null;
    const notResim = formData.get("image") as string | null;

    // Boş alan kontrolü
    if (!notAdi || !notDetay || !notResim) {
        throw new Error("Eksik alanlar var");
    }

    // Veritabanına veri ekleme işlemi
    try {
        return await db.sınıfDokuz.create({
            data: {
                ad: notAdi,
                detay: notDetay,
                resim: notResim
            }
        });
    } catch (error) {
        console.error("Veri eklerken hata oluştu:", error);
        throw new Error("Veri eklerken hata oluştu");
    }
}
