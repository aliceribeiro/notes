import { Heading } from "../../components/Heading";
import { Sidebar } from "../../components/Sidebar";
import Building from "../../assets/illustrations/Building";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

export function Home() {
  const { logout } = useContext(AuthContext);

  const storageUser = sessionStorage.getItem("@AuthFirebase:user");
  const userName = storageUser && JSON.parse(storageUser);

  return (
    <div className="flex h-screen w-screen">
      <Sidebar username={userName.displayName} hanldeExit={logout} />
      <div className="flex w-full flex-col items-center justify-center bg-gray-400">
        <div className="flex flex-col items-center gap-4">
          <Building />
          <Heading className="text-caramel-700">Página em construção</Heading>
        </div>
      </div>
    </div>
  );
}
