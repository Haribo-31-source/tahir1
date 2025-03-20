import { newNote } from "../../data/notYukle";

export async function POST(request: Request) {
  const formData = await request.formData();
  await newNote(formData);
  return new Response("Note added successfully", { status: 200 });
}
