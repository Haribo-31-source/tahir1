import { getNoteAdmin } from "@/app/data/notGetir";

export async function GET() {
  try {
    const enYeniNotlar = await getNoteAdmin(); // Verileri al
    return new Response(JSON.stringify(enYeniNotlar), { status: 200 });
  } catch (error) {
    console.error("Hata:", error);
    return new Response("Error fetching notes.", { status: 500 });
  }
}