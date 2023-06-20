import { useState } from "react";
import { Heading } from "../../components/Heading";
import { Button } from "../../components/Button";
import { Plus } from "phosphor-react";
import { Card } from "../../components/Card";
import { NewNotes } from "./NewNotes";

export function Notes() {
  const [newNote, setNewNote] = useState<boolean>(false);

  const renderContent = () => {
    const cards: JSX.Element[] = [];

    for (let i = 1; i < 12; i++) {
      const card = (
        <Card
          title={`Título ${i} `}
          date={"24 de abril de 2023"}
          category={"Categoria"}
          text={"Lorem ipsum dolor sit amet, consectetur adipisicing."}
          handleDelete={() => console.log("Cliquei em delete", i)}
        />
      );

      cards.push(card);
    }
    return cards;
  };

  return (
    <div className="flex h-full">
      <div className={newNote ? "w-96 overflow-auto" : ""}>
        <Heading size="lg" className="text-caramel-700">
          Minhas notas
        </Heading>
        <Button.Link icon={<Plus size={24} />} label="Nova nota" handleClick={() => setNewNote(true)} />

        <div className="over mt-8 flex flex-wrap gap-4 pr-8">{renderContent()}</div>
      </div>
      {newNote && (
        <div className="w-full border-l-2 border-gray-700  pl-8">
          <NewNotes />
        </div>
      )}
    </div>
  );
}
