import { Button } from "../Button";
import { CheckSquare, Note, SignOut } from "phosphor-react";
import { BaseRoutes, ROUTES } from "../../helpers/routes";
import { Separator } from "../Separator";
import { Heading } from "../Heading";
import { useNavigate } from "react-router-dom";

export interface SidebarProps {
  username?: string;
  handleExit: () => void;
}

export function Sidebar({ username, handleExit }: SidebarProps) {
  const navigate = useNavigate();

  const navigateToPage = (route: BaseRoutes) => {
    navigate(route);
  };

  return (
    <div className="flex min-w-max flex-col justify-between bg-feedback-grayLight p-4 text-gray-700">
      <div className="flex flex-col gap-2">
        <Heading size="sm">{username ? `Olá, ${username} 👋` : "Olá!"}</Heading>
        <Separator.Line />
        <Button.Link icon={<Note size={24} />} label="Minhas notas" handleClick={() => navigateToPage(ROUTES.NOTES)} />
        <Button.Link icon={<CheckSquare size={24} />} label="To-do list" handleClick={() => navigateToPage(ROUTES.TODO_LIST)} />
      </div>
      <div>
        <Separator.Line />
        <Button.Link icon={<SignOut size={24} />} label="Sair" handleClick={handleExit} />
      </div>
    </div>
  );
}
