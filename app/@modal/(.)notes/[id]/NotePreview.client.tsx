"use client";

import Modal from "@/components/Modal/Modal";
import css from "./NotePreview.module.css";
import { Note } from "@/types/note";
import { useRouter } from "next/navigation";

interface NotePreviewProps {
  note: Note;
}

export default function NotePreviewClient({ note }: NotePreviewProps) {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClick}>
      <button className={css.backBtn} onClick={handleClick}>
        Back
      </button>
      <main className={css.main}>
        <div className={css.container}>
          <div className={css.item}>
            <div className={css.header}>
              <h2>{note.title}</h2>
            </div>
            <p className={css.tag}>{note.tag}</p>
            <p className={css.content}>{note.content}</p>
            <p className={css.date}>{note.createdAt}</p>
          </div>
        </div>
      </main>
    </Modal>
  );
}
