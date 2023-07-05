import { useNavigate } from "react-router-dom";
import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { ROUTES } from "../../helpers/routes";
import NotFound from "../../assets/illustrations/NotFound";

export function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-background-clearLight">
      <div className="flex w-auto flex-col items-center gap-4 px-7">
        <Heading className="text-primary">Oops!</Heading>
        <NotFound />
        <Text className="text-dark-heavy">Página não encontrada</Text>
        <Button.Primary onClick={() => navigate(ROUTES.BASE)}>Voltar para o Login</Button.Primary>
      </div>
    </div>
  );
}
