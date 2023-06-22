import { useState } from "react";
import { Heading } from "../../components/Heading";
import { Button } from "../../components/Button";
import { CaretRight, Plus } from "phosphor-react";
import { Card } from "../../components/Card";
import { NewNotes } from "./NewNotes";
import { Text } from "../../components/Text";
import { Separator } from "../../components/Separator";

interface NotesProps {
  title: string;
  date: string;
  category: string;
  text: string;
}

export function Notes() {
  const [newNote, setNewNote] = useState<boolean>(false);
  const [noteClicked, setNoteClicked] = useState<NotesProps>({ title: "", date: "", category: "", text: "" });

  const notes: NotesProps[] = [];

  const throwContent = () => {
    for (let i = 1; i < 12; i++) {
      const note = {
        title: `Título ${i}`,
        date: new Date().toString(),
        category: "Categoria",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing."
      };

      notes.push(note);
    }
    return notes;
  };

  throwContent();

  return (
    <div className="flex h-full">
      <div className={newNote ? "w-96 overflow-auto" : ""}>
        <Heading size="lg" className="text-caramel-700">
          Minhas notas
        </Heading>
        <Button.Link icon={<Plus size={24} />} label="Nova nota" handleClick={() => setNewNote(true)} />

        <div className="over mt-8 flex flex-wrap gap-4 pr-8">
          {notes.map((note, index) => {
            return (
              <Card
                key={index}
                title={note.title}
                date={note.date}
                category={note.category}
                text={note.text}
                handleClick={() => setNoteClicked(note)}
                handleDelete={() => console.log("Apaguei :>> ", note)}
              />
            );
          })}
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
              date={noteClicked.date}
              category={noteClicked.category}
              text={noteClicked.text}
              handleClick={() => setNoteClicked(noteClicked)}
              handleDelete={() => console.log("Apaguei :>> ", noteClicked)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
