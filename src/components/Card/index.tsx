import { Trash } from "phosphor-react";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { Tag } from "../Tag";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import clsx from "clsx";

export interface CardProps {
  title: string;
  date: string;
  categories: string[];
  text: string;
  handleClick: () => void;
  handleDelete: () => void;
  className?: string;
}

export function Card({ title, date, categories, text, handleClick, handleDelete, className }: CardProps) {
  const formattedDate = date ? format(new Date(date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR }) : "Sem data informada";

  return (
    <div className={clsx("w-72 truncate rounded bg-feedback-grayLight p-4", className)} onClick={handleClick}>
      <div className="flex items-center justify-between text-caramel-700">
        <Heading>{title}</Heading>
        <Trash size={24} onClick={handleDelete} className="cursor-pointer" />
      </div>
      <Text size="sm" className="text-gray-700">
        {formattedDate}
      </Text>
      <div className="flex items-center gap-2 py-2 text-caramel-700">
        {categories.map((category, index) => {
          return <Tag key={index}>{category}</Tag>;
        })}
      </div>
      <Text className="text-black-600">{text}</Text>
    </div>
  );
}
