import { getNotes12 } from "@/app/data/notGetir";

export async function GET() {
  try {
    const enYeniNotlar = await getNotes12(); // Verileri al
    return new Response(JSON.stringify(enYeniNotlar), { status: 200 });
  } catch (error) {
    console.error("Hata:", error);
    return new Response("Error fetching notes.", { status: 500 });
  }
}