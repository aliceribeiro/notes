import { Button } from "../Button";
import { CheckSquare, Note, SignOut } from "phosphor-react";
import { ROUTES } from "../../helpers/routes";
import { Separator } from "../Separator";
import { Heading } from "../Heading";

export interface SidebarProps {
  username?: string;
  hanldeExit: () => void;
}

export function Sidebar({ username, hanldeExit }: SidebarProps) {
  return (
    <div className="flex min-w-max flex-col justify-between bg-gray-400 p-4 text-gray-700">
      <div className="flex flex-col gap-2">
        <Heading size="sm">{username ? `Olá, ${username} 👋` : "Olá!"}</Heading>
        <Separator.Line />
        <Button.Link icon={<Note size={24} />} label="Minhas notas" navigateTo={ROUTES.HOME} />
        <Button.Link icon={<CheckSquare size={24} />} label="To-do list" navigateTo="#" />
      </div>
      <div>
        <Separator.Line />
        <Button.Link icon={<SignOut size={24} />} label="Sair" onClick={hanldeExit} />
      </div>
    </div>
  );
}
