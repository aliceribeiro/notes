import { Tag, Trash } from "phosphor-react";
import { Heading } from "../Heading";
import { Text } from "../Text";

export interface CardProps {
  title: string;
  date: string;
  category: string;
  text: string;
  handleDelete: () => void;
}

export function Card({ title, date, category, text, handleDelete }: CardProps) {
  return (
    <div className="w-72 truncate rounded bg-gray-600 p-4">
      <div className="flex items-center justify-between text-caramel-700">
        <Heading className="">{title}</Heading>
        <Trash size={24} onClick={handleDelete} className="cursor-pointer" />
      </div>
      <Text size="sm" className="text-gray-700">
        {date}
      </Text>
      <div className="flex items-center gap-2 py-2 text-caramel-700">
        <Tag size={24} className="rotate-90" />
        <Text>{category}</Text>
      </div>
      <Text className="text-black-600">{text}</Text>
    </div>
  );
}
