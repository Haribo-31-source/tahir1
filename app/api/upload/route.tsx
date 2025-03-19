import { writeFile } from "fs/promises";
import path from "path";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { file, fileName } = JSON.parse(req.body); // Base64 formatında veri gelir
      const buffer = Buffer.from(file, "base64");

      const filePath = path.join(process.cwd(), "public/uploads", fileName);
      await writeFile(filePath, buffer);

      return res.status(200).json({ url: `/uploads/${fileName}` });
    } catch (error) {
      return res.status(500).json({ error: "Dosya yükleme hatası" });
    }
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
