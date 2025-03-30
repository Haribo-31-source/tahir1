import { getNotes10 } from "@/app/data/notGetir";


export async function GET() {
  try {
    const enYeniNotlar = await getNotes10(); // Verileri al
    return new Response(JSON.stringify(enYeniNotlar), { status: 200 });
    console.log("Veriler:", enYeniNotlar); // Verileri konsola yazdır
  } catch (error) {
    console.error("Hata:", error);
    return new Response("Error fetching notes.", { status: 500 });
  }

}