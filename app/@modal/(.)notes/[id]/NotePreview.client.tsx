"use client";

import Modal from "@/components/Modal/Modal";
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
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button onClick={handleClick}>Go back</button>
    </Modal>
  );
}
