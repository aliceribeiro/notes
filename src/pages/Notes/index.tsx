import { useContext, useState } from "react";
import { Heading } from "../../components/Heading";
import { Button } from "../../components/Button";
import { CaretRight, Plus } from "phosphor-react";
import { Card } from "../../components/Card";
import { NewNotes } from "./NewNotes";
import { Text } from "../../components/Text";
import { Separator } from "../../components/Separator";
import { AuthContext, Note } from "../../contexts/auth";

export function Notes() {
  const { notes } = useContext(AuthContext);

  const [newNote, setNewNote] = useState<boolean>(false);
  const [noteClicked, setNoteClicked] = useState<Note>({ title: "", date: "", categories: [""], note: "" });

  return (
    <div className="flex h-full">
      <div className={newNote ? "w-96 overflow-auto" : ""}>
        <Heading size="lg" className="text-caramel-700">
          Minhas notas
        </Heading>
        <Button.Link icon={<Plus size={24} />} label="Nova nota" handleClick={() => setNewNote(true)} />

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
                    date={note.date ?? "Sem data informada"}
                    // TODO: corrigir/refatorar essa parte de categorias
                    category={note.categories[0]}
                    text={note.note}
                    handleClick={() => setNoteClicked(note)}
                    handleDelete={() => console.log("Apaguei :>> ", note)}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
      {newNote && (
        <div className="w-full border-l-2 border-gray-700 pl-8">
          <NewNotes />
        </div>
      )}
      {noteClicked && (
        <div className="w-full border-l-2 border-gray-700 pl-8">
          <div className="w-full">
            <Text size="lg" className="flex items-center gap-2 font-bold">
              {"Minhas notas"} <CaretRight />
              {noteClicked.title}
            </Text>
            <Separator.Line />
            <Card
              key={noteClicked.title}
              title={noteClicked.title}
              date={noteClicked.date ?? "Sem data informada"}
              category={noteClicked.categories[0]}
              text={noteClicked.note}
              handleClick={() => setNoteClicked(noteClicked)}
              handleDelete={() => console.log("Apaguei :>> ", noteClicked)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
