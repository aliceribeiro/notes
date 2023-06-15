import { Heading } from "../../components/Heading";
import { Sidebar } from "../../components/Sidebar";
import Building from "../../assets/illustrations/Building";

export function Home() {
  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <div className="w-full flex flex-col items-center justify-center bg-gray-400">
        <div className="flex flex-col items-center gap-4">
          <Building />
          <Heading className="text-caramel-700">Página em construção</Heading>
        </div>
      </div>
    </div>
  );
}
