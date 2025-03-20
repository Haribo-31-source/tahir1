import { Category, PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function newNote(formData: FormData) {
    const FormNote = formData.get("name") as string;
    const FormCategory = formData.get("category") as Category;
    const FormDescription = formData.get("description") as string;
    const FormImageUrl = formData.get("imageUrl") as string;
    const sinifSelect = formData.get("sinif") as string;
    const sinif = sinifSelect as string;

    if (!sinifSelect) {
        throw new Error("Invalid class type");
    }
    if (sinif === "s9") {
        await db.s9.create({
            data: {
                name: FormNote,
                category: FormCategory,
                description: FormDescription,
                imageUrl: FormImageUrl,
            },
        });
    } else if (sinif === "s10") {
        await db.s10.create({
            data: {
                name: FormNote,
                category: FormCategory,
                description: FormDescription,
                imageUrl: FormImageUrl,
            },
        });
    } else if (sinif === "s11") {
        await db.s11.create({
            data: {
                name: FormNote,
                category: FormCategory,
                description: FormDescription,
                imageUrl: FormImageUrl,
            },
        });
        } else if (sinif === "s12") {
            await db.s12.create({
                data: {
                    name: FormNote,
                    category: FormCategory,
                    description: FormDescription,
                    imageUrl: FormImageUrl,
                },
            });
    }
}

