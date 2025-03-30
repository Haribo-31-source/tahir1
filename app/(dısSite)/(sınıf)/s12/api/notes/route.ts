import { getNotes3 } from "@/app/data/notGetir"; // getNotes fonksiyonunu import et

export async function GET() {
  try {
    const topNotes = await getNotes3(); // Verileri al
    return new Response(JSON.stringify(topNotes), { status: 200 });
  } catch (error) {
    console.error("Hata:", error);
    return new Response("Error fetching notes.", { status: 500 });
  }
}
