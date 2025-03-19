import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function newNote(formData: FormData) {
    const FormNote = formData.get("name");
    const FormCategory = formData.get("category");
    const FormDescription = formData.get("description");
    const FormImageUrl = formData.get("imageUrl");
    const sinif = formData.get("sinif");

    if (typeof sinif === 'string' && db[sinif]) {
        await db[sinif].create({
            data: {
                name: FormNote,
                category: FormCategory,
                description: FormDescription,
                imageUrl: FormImageUrl,
                sinif: sinif,
            },
        });
    } else {
        throw new Error("Invalid class type");
    }
}