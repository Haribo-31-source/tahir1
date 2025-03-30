"use client";

import styles from "../page.module.css";
import { useState , useEffect } from "react";

interface Note {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  name: string;
  description: string;
  view: number;
}

export default function Page() {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [topNotes, setTopNotes] = useState<Note[]>([]);
  
    useEffect(() => {
        const fetchTopNotes = async () => {
          try {
            const response = await fetch("/tahirAdmin/s11/api/admin");
    
            const notes = await response.json();
            if (!Array.isArray(notes)) {
              console.error("Data is not an array:", notes);
              setError("Data is not an array");
            } else {
              setTopNotes(notes);
            }
          } catch (error) {
            console.error("Error:", error);
            setError("Failed to fetch notes.");
          }
        };
    
        fetchTopNotes();
      }, []);

    const fetchNote = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("/tahirAdmin/s11/api/getNote", {
          method: "POST",
          body: JSON.stringify({ id: Number(id)}),
          headers: { "Content-Type": "application/json" },
        });
  
        const data = await res.json();
        console.log("API'den gelen veri:", data);
  
        if (data.error) throw new Error(data.error);
  
        // Gelen veriyi form alanlarına aktarıyoruz
        setTitle(data.name); // 'name' alanını 'title' olarak kullanıyoruz
        setContent(data.description || ""); // 'description' içerik olarak kullanılabilir
        setCategory(data.category || ""); // 'category' alanını alıyoruz
  
      } catch (err: any) {
        console.error("Hata:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    const updateNote = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("/tahirAdmin/s11/api/updateNote", {
          method: "PUT",
          body: JSON.stringify({ id: Number(id), title, content, category }),
          headers: { "Content-Type": "application/json" },
        });
  
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        alert("Not başarıyla güncellendi!");
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const handleDelete = async (id: number) => {
        const response = await fetch("/tahirAdmin/s11/api/delete", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });
      
        if (response.ok) {
          setTopNotes((prevNotes) => prevNotes.filter(note => note.id !== id)); // Silinen notu kaldır
          alert("Not başarıyla silindi!");
        } else {
          console.error("Silme hatası:", await response.text());
        }
      };
  
    return (
      <div className={styles.noteEditForm}>
        <h2 className="text-lg font-bold mb-2">Not Düzenleme</h2>
        <input
          type="number"
          placeholder="Not ID'sini gir"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-full p-2 border rounded mb-2 mr-2"
        />
        <button onClick={fetchNote} className="bg-blue-500 text-white px-4 py-2 rounded">
          Getir
        </button>
        {error && <p className="text-red-500">{error}</p>}
        {title && (
          <div className={styles.noteForm}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.input1}
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className={styles.input2}
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={styles.input3}
            >
              <option value="">Kategori Seçin</option>
              <option value="PDF">PDF</option>
              <option value="NOTE">NOTE</option>
            </select>
            <button onClick={updateNote} className="bg-green-500 text-white px-4 py-2 rounded">
              Kaydet
            </button>
          </div>
        )}
    <div className={styles.topNotes}>
        {topNotes.map((note) => (
          <div className={styles.aNote} key={note.id}>
            <p className={styles.noteTitle}>{note.name}</p>
            <p className={styles.id} >{note.id}</p>
            <button className={styles.deleteButton} onClick={() => handleDelete(note.id)}>SİL</button>
          </div>
        ))}
      </div>
      </div>
      
    );
}