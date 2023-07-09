import { Button } from "../Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useSidebar } from "../../contexts/sidebar";
import { CaretLeft, CheckSquare, Note, SignOut } from "phosphor-react";
import { BaseRoutes, ROUTES } from "../../helpers/routes";
import { Separator } from "../Separator";
import { Heading } from "../Heading";
import { Tooltip } from "../Tooltip";
import clsx from "clsx";

export interface SidebarProps {
  username?: string;
  handleExit: () => void;
}

export function Sidebar({ username, handleExit }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpen, toggleSidebar } = useSidebar();

  const navigateToPage = (route: BaseRoutes) => {
    navigate(route);
  };

  const currentLocation = location.pathname;

  return (
    <>
      {isOpen && (
        <div className="flex min-w-max flex-col justify-between bg-feedback-grayLight p-4 text-gray-heavy">
          <div className="relative flex flex-col gap-2">
            <div className="flex items-center justify-between gap-3">
              <Heading size="sm" className="text-primary">
                {username ? `Olá, ${username}` : "Olá!"}
              </Heading>
              <Tooltip helpText="Esconder barra lateral" side="right">
                <div onClick={toggleSidebar} className="cursor-pointer rounded bg-secondary p-1 text-gray-light">
                  <CaretLeft size={16} />
                </div>
              </Tooltip>
            </div>
            <Separator.Line />
            <Button.Link
              icon={<Note size={24} />}
              label="Minhas notas"
              handleClick={() => navigateToPage(ROUTES.NOTES)}
              className={clsx({ "font-bold text-primary": currentLocation === ROUTES.NOTES })}
            />
            <Button.Link
              icon={<CheckSquare size={24} />}
              label="To-do list"
              handleClick={() => navigateToPage(ROUTES.TODO_LIST)}
              className={clsx({ "font-bold text-primary": currentLocation === ROUTES.TODO_LIST })}
            />
          </div>
          <div>
            <Separator.Line />
            <Button.Link icon={<SignOut size={24} />} label="Sair" handleClick={handleExit} />
          </div>
        </div>
      )}
    </>
  );
}
