import { NextApiRequest, NextApiResponse } from 'next';
import { IncomingForm, Fields, Files, File } from 'formidable';
import path from 'path';
import { newNote } from '../data/notYukle';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const form = new IncomingForm({
    uploadDir: path.join(process.cwd(), 'public'),
    keepExtensions: true,
  });

  form.parse(req, async (err: Error, fields: Fields, files: Files) => {
    if (err) {
      res.status(500).json({ error: 'Dosya yükleme hatası' });
      return;
    }

    if (!files.image || Array.isArray(files.image)) {
      res.status(400).json({ error: 'Geçersiz dosya' });
      return;
    }

    const imageUrl = `/public/uploads/${path.basename((files.image as File).filepath)}`;
    const noteData = new FormData();
    Object.entries(fields).forEach(([key, value]) => {
      if (typeof value === 'string') {
        noteData.append(key, value);
      }
    });
    noteData.append('imageUrl', imageUrl); // imageUrl özelliğini ekleyin
    // Veritabanına kaydetme işlemi burada yapılacak
    await newNote(noteData);

    res.status(200).json({ message: 'Dosya başarıyla yüklendi', imageUrl });
  });
}