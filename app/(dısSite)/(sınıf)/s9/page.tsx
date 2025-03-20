"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function TopNotesPage() {
  const [topNotes, setTopNotes] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopNotes = async () => {
      try {
        const response = await fetch("/s9/api/notes");

        if (!response.ok) {
          throw new Error("API response was not ok");
        }

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

  return (
    <div className={`${styles.container} bg-gray-100 min-h-screen p-4`}>
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-black">
        Top 6 Notes
      </h1>
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topNotes.length > 0 ? (
          topNotes.map((note) => (
            <div
              key={note.id}
              className="bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 hover:scale-105"
            >
              <Link
                href={`/s9/Notlar/${note.id}`}
                className="block no-underline"
              >
                {/* Resim Gösterimi */}
                {note.imageUrl && (
                  <img
                    src={`/uploads/${note.imageUrl}`}
                    alt={note.name}
                    className="w-full h-48 object-cover rounded"
                  />
                )}

                {/* Başlık ve Açıklama */}
                <h2 className="text-xl font-semibold text-black mt-3">
                  {note.name}
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  Category: {note.category}
                </p>
                <p className="text-gray-700 mt-2">{note.description}</p>
                <p className="text-xs text-gray-500 mt-2">Views: {note.view}</p>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            Top 6 notes are loading or there was an issue fetching them.
          </p>
        )}
      </div>
    </div>
  );
}
