import { useContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "../../helpers/routes";
import { Sidebar } from "../../components/Sidebar";
import { AuthContext } from "../../contexts/auth";
import { Notes } from "../Notes";
import { Loading } from "../../components/Loading";
import { SidebarToggle } from "../../components/SidebarToggle";

export function Home() {
  const { fetchUserData, logout } = useContext(AuthContext);
  const { pathname } = useLocation();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const storageUser = sessionStorage.getItem("@AuthFirebase:user");
  const userName = storageUser && JSON.parse(storageUser);

  const getInfos = () => {
    setIsLoading(true);
    fetchUserData();
    setIsLoading(false);
  };

  useEffect(() => {
    getInfos();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <SidebarToggle />
          <div className="flex h-screen w-screen">
            <Sidebar username={userName.displayName} handleExit={logout} />
            {pathname === ROUTES.NOTES ? <Notes /> : <Outlet />}
          </div>
        </>
      )}
    </>
  );
}
