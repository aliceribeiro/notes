import { CaretRight } from "phosphor-react";
import { Heading } from "../../../components/Heading";
import { Separator } from "../../../components/Separator";
import { Text } from "../../../components/Text";
import { Select } from "../../../components/Select";
import { TextInput } from "../../../components/TextInput";
import { Button } from "../../../components/Button";
import { FormEvent } from "react";

export function NewNotes() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("Cliquei em submit");
  }

  return (
    <div className="h-full">
      <Text size="lg" className="flex items-center gap-2 font-bold">
        {"Minhas notas"} <CaretRight />
        {"Nova nota"}
      </Text>
      <Separator.Line />
      <Heading className="mt-4 text-caramel-700">Adicionar nova nota</Heading>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
        <label htmlFor="category">
          <Select />
        </label>
        <label htmlFor="title">
          <TextInput.Root>
            <TextInput.Input type="text" id="title" placeholder="Título da nota" />
          </TextInput.Root>
        </label>
        <label htmlFor="note">
          <TextInput.TextArea placeholder="Escreva sua nota" />
        </label>

        <div className="flex gap-3">
          <Button.Secondary>Cancelar</Button.Secondary>
          <Button.Primary type="submit">Salvar</Button.Primary>
        </div>
      </form>
    </div>
  );
}
