import { Button } from "../Button";
import { Note } from "phosphor-react";

export function Sidebar() {
  return (
    <div className="min-w-max p-4 flex flex-col bg-gray-400 text-gray-700">
      <Button.Link icon={<Note size={24} />} label="Lorem ipsum dolor sit" navigateTo="#" />
    </div>
  );
}
