import { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "../../helpers/routes";
import { Sidebar } from "../../components/Sidebar";
import { AuthContext } from "../../contexts/auth";
import { Notes } from "../Notes";

export function Home() {
  const { logout } = useContext(AuthContext);
  const { pathname } = useLocation();

  const storageUser = sessionStorage.getItem("@AuthFirebase:user");
  const userName = storageUser && JSON.parse(storageUser);

  return (
    <div className="flex h-screen w-screen">
      <Sidebar username={userName.displayName} handleExit={logout} />
      <div className="w-full bg-gray-400  p-8">{pathname === ROUTES.HOME ? <Notes /> : <Outlet />}</div>
    </div>
  );
}
