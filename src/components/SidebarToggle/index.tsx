import { useSidebar } from "../../contexts/sidebar";
import { List } from "phosphor-react";
import { Tooltip } from "../Tooltip";

export function SidebarToggle() {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <>
      {!isOpen && (
        <Tooltip helpText="Mostrar barra lateral">
          <div onClick={toggleSidebar} className="absolute left-2 top-2 cursor-pointer rounded bg-secondary p-1 text-gray-light">
            <List size={24} />
          </div>
        </Tooltip>
      )}
    </>
  );
}
