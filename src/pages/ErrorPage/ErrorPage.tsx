import { useNavigate } from "react-router-dom";
import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { ROUTES } from "../../helpers/routes";
import NotFound from "../../assets/illustrations/NotFound";

export function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-400">
      <div className="w-auto flex flex-col items-center gap-4">
        <Heading className="text-caramel-700">Oops!</Heading>
        <NotFound />
        <Text className="text-gray-700">Página não encontrada</Text>
        <Button.Primary onClick={() => navigate(ROUTES.BASE)}>Voltar para o Login</Button.Primary>
      </div>
    </div>
  );
}
