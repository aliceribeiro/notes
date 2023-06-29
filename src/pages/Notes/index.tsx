import { useContext, useState } from "react";
import { Heading } from "../../components/Heading";
import { Button } from "../../components/Button";
import { CaretRight, Plus } from "phosphor-react";
import { Card } from "../../components/Card";
import { NewNotes } from "./NewNotes";
import { Text } from "../../components/Text";
import { Separator } from "../../components/Separator";
import { AuthContext, Note } from "../../contexts/auth";
import { deleteNoteFromFirestore } from "../../services/notes";

export function Notes() {
  const { notes } = useContext(AuthContext);

  const [newNote, setNewNote] = useState<boolean>(false);
  const [noteClicked, setNoteClicked] = useState<Note>({ title: "", lastUpdate: "", categories: [""], note: "" });
  const [clickedNoteIndex, setClickedNoteIndex] = useState<number>(-1);
  const [showClickedNote, setShowClickedNote] = useState<boolean>(false);

  const deleteNote = (index: number) => {
    deleteNoteFromFirestore(index)
      .then(() => {
        alert("Item excluído com sucesso!");
      })
      .catch((error) => {
        throw new Error("Erro ao excluir item:", error);
      });
  };

  return (
    <div className="flex h-full">
      <div className={newNote ? "w-96 overflow-auto" : ""}>
        <Heading size="lg" className="text-caramel-700">
          Minhas notas
        </Heading>
        <Button.Link
          icon={<Plus size={24} />}
          label="Nova nota"
          handleClick={() => {
            setNewNote(true);
            setShowClickedNote(false);
          }}
        />

        <div className="over mt-8 flex flex-wrap gap-4 pr-8">
          {notes.length === 0 ? (
            // TODO: criar tela para conteúdo vazio
            <p>Sem notas</p>
          ) : (
            <>
              {notes.map((note, index) => {
                return (
                  <Card
                    key={index}
                    title={note.title}
                    date={note.lastUpdate}
                    categories={note.categories}
                    text={note.note}
                    handleClick={() => {
                      setNoteClicked(note);
                      setClickedNoteIndex(index);
                      setShowClickedNote(true);
                      setNewNote(false);
                    }}
                    handleDelete={() => deleteNote(index)}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
      {newNote && (
        <div className="w-full border-l-2 border-gray-700 pl-8 pr-8">
          <NewNotes handleCancel={() => setNewNote(false)} />
        </div>
      )}
      {noteClicked && showClickedNote && (
        <div className="w-full border-l-2 border-gray-700 pl-8">
          <div className="w-full">
            <Text size="lg" className="flex items-center gap-2 font-bold">
              {"Minhas notas"} <CaretRight />
              {noteClicked.title}
            </Text>
            <Separator.Line />
            <div className="mt-8">
              <Card
                key={noteClicked.title}
                title={noteClicked.title}
                date={noteClicked.lastUpdate}
                categories={noteClicked.categories}
                text={noteClicked.note}
                handleClick={() => setNoteClicked(noteClicked)}
                handleDelete={() => deleteNote(clickedNoteIndex)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
