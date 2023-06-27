import { collection, doc, getDoc, arrayRemove, updateDoc } from "firebase/firestore";
import { db } from "../contexts/auth";

const userId = sessionStorage.getItem("@AuthFirebase:userID") ?? "";

export const deleteNoteFromFirestore = async (index: number) => {
  const userRef = doc(collection(db, "users"), userId);
  const userSnapshot = await getDoc(userRef);

  if (userSnapshot.exists()) {
    const notes = userSnapshot.data().notes;

    if (index >= 0 && index < notes.length) {
      const updatedNotes = arrayRemove(notes[index]);

      await updateDoc(userRef, { notes: updatedNotes });
    }
  } else {
    throw new Error("Não foi possível apagar nota");
  }
};
