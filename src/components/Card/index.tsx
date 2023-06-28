import { Plus, Trash } from "phosphor-react";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { Tag } from "../Tag";

export interface CardProps {
  title: string;
  date: string;
  categories: string[];
  text: string;
  handleClick: () => void;
  handleDelete: () => void;
}

export function Card({ title, date, categories, text, handleClick, handleDelete }: CardProps) {
  return (
    <div className="w-72 truncate rounded bg-gray-600 p-4" onClick={handleClick}>
      <div className="flex items-center justify-between text-caramel-700">
        <Heading className="">{title}</Heading>
        <Trash size={24} onClick={handleDelete} className="cursor-pointer" />
      </div>
      <Text size="sm" className="text-gray-700">
        {date}
      </Text>
      <div className="flex items-center gap-2 py-2 text-caramel-700">
        {categories.map((category, index) => {
          return <Tag key={index}>{category}</Tag>;
        })}
        <Tag>
          <Plus size={16} />
          <Text size="sm">Nova categoria</Text>
        </Tag>
      </div>
      <Text className="text-black-600">{text}</Text>
    </div>
  );
}
