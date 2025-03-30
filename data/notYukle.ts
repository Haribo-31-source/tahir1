import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function newNote(formData: FormData) {
  const FormNote = formData.get('note') as string;
  const sinif = formData.get('sinif') as string;
  const FormImageUrl = formData.get('imageUrl') as string;
  const formDescription = formData.get('description') as string;

  if (!FormNote  || !sinif) {
    throw new Error("Missing required form data");
  }

  if (sinif === "s9") {
    await prisma.s9.create({
      data: {
        name: FormNote,
        category: "NOTE",
        imageUrl: FormImageUrl,
        description: formDescription,
      },
    });
  }
  // Diğer sınıflar için kodlar eklenebilir...
}
