import { getNotes2 } from "@/app/data/notGetir"; // getNotes fonksiyonunu import et

export async function GET() {
  try {
    const topNotes = await getNotes2(); // Verileri al
    return new Response(JSON.stringify(topNotes), { status: 200 });
  } catch (error) {
    console.error("Hata:", error);
    return new Response("Error fetching notes.", { status: 500 });
  }
}
