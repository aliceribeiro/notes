import { Heading } from "../../components/Heading";
import { Button } from "../../components/Button";
import { Plus } from "phosphor-react";
import { Card } from "../../components/Card";

export function Notes() {
  const renderContent = () => {
    const cards: JSX.Element[] = [];

    for (let i = 1; i < 12; i++) {
      const card = (
        <Card
          title={`Título ${i} `}
          date={"24 de abril de 2023"}
          category={"Categoria"}
          text={"Lorem ipsum"}
          handleDelete={() => console.log("Cliquei em delete", i)}
        />
      );

      cards.push(card);
    }
    return cards;
  };

  return (
    <div className="h-full  bg-gray-400 p-8">
      <Heading className="text-caramel-700">Página em construção</Heading>
      <Button.Link icon={<Plus size={24} />} label="Nova nota" handleClick={() => console.log("Cliquei em nova nota")} />

      <div className="mt-8 flex flex-wrap gap-4">{renderContent()}</div>
    </div>
  );
}
