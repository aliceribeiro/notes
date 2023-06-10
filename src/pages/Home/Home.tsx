import Building from "../../assets/illustrations/Building";
import { Heading } from "../../components/Heading";

export function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-400">
      <div className="w-auto flex flex-col items-center gap-4">
        <Building />
        <Heading className="text-caramel-700">Página em construção</Heading>
      </div>
    </div>
  );
}
