import { CaretRight } from "phosphor-react";
import { Heading } from "../../../components/Heading";
import { Separator } from "../../../components/Separator";
import { Text } from "../../../components/Text";

export function NewNotes() {
  return (
    <div className="h-full bg-caramel-200">
      <Text size="lg" className="flex items-center gap-2 font-bold">
        {"Minhas notas"} <CaretRight />
        {"Nova nota"}
      </Text>
      <Separator.Line />
      <Heading className="mt-4 text-caramel-700">Adicionar nova nota</Heading>
    </div>
  );
}
