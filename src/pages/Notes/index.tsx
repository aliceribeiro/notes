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
import clsx from "clsx";
import { Empty } from "../../components/Empty";

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
      <div className="scrollbar-thumb-gray-600 mr-1 w-96 overflow-y-hidden scrollbar-thin scrollbar-track-feedback-grayLight hover:overflow-y-auto">
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

        {notes.length === 0 ? (
          <Empty description="Você ainda não possui nenhuma nota" />
        ) : (
          <>
            <div className="over mx mt-8 flex flex-wrap gap-4 pr-8">
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
                    className={clsx({ "bg-gray-600": noteClicked.title === note.title })}
                  />
                );
              })}
            </div>
            {newNote && (
              <div className="border-gray-700 w-full border-l-2 pl-8 pr-8">
                <NewNotes handleCancel={() => setNewNote(false)} />
              </div>
            )}
            {noteClicked && showClickedNote && (
              <div className="border-gray-700 w-full border-l-2 pl-8">
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
          </>
        )}
      </div>
    </div>
  );
}
