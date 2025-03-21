"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";



interface Note {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  name: string;
  description: string;
  view: number;
}


export default function TopNotesPage() {
  const [topNotes, setTopNotes] = useState<Note[]>([]);
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
    <div className={styles.container} id="top-notes-page">
      <h1 className={styles.title}>Top 6 Notes</h1>
      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.notesGrid}>
        {topNotes.length > 0 ? (
          topNotes.map((note) => (
            <div key={note.id} className={styles.noteCard}>
              <Link href={`/s9/Notlar/${note.id}`} className="no-underline text-black">
                {note.imageUrl && (
                  <Image 
                    src={`/uploads${note.imageUrl}`}
                    alt={note.name}
                    className={styles.noteImage}
                    width={300}
                    height={150}
                  />
                )}
                <div className={styles.noteContent}>
                  <h2 className={styles.noteTitle}>{note.name}</h2>
                  <p className={styles.noteDescription}>{note.description}</p>
                  <p className={styles.noteViews}>Views: {note.view}</p>
                </div>
                <div className={styles.noteHoverEffect}></div>
              </Link>
            </div>
          ))
        ) : (
          <p className={styles.loadingMessage}>
            Top 6 notes are loading or there was an issue fetching them.
          </p>
        )}
      </div>
    </div>
  );
}
