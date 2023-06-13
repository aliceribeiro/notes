import { FormEvent, useContext, useState } from "react";
import { NotePencil, EnvelopeSimple, Lock, GoogleLogo } from "phosphor-react";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { TextInput } from "../../components/TextInput";
import { Text } from "../../components/Text";
import { Navigate, useNavigate } from "react-router-dom";
import { ROUTES } from "../../helpers/routes";
import LoginImage from "../../assets/illustrations/LoginImage";
import { AuthGoogleContext } from "../../contexts/authGoogle";

const version = import.meta.env.VITE_VERSION;

export function Signin() {
  const navigate = useNavigate();
  const { signinGoogle, signed } = useContext(AuthGoogleContext);

  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    navigate(ROUTES.HOME);
    setIsUserSignedIn(true);
  }

  async function loginGoogle() {
    await signinGoogle();
  }

  if (signed) {
    return <Navigate to={ROUTES.HOME} />;
  } else {
    return (
      <div className="w-screen h-screen flex">
        <div className="w-1/2 h-screen flex flex-col justify-center items-center bg-caramel-200-tp">
          <LoginImage />
          <div className="text-caramel-200-tp">{version ? version : ""}</div>
        </div>
        <div className="w-1/2 h-screen bg-gray-400 flex flex-col items-center justify-center">
          <header className="max-w-sm">
            <NotePencil size={42} className="text-caramel-700" />
            <Heading className="text-caramel-700">Olá 👋</Heading>
            <Text className="text-gray-700">Insira as informações que você cadastrou ao se registrar.</Text>
          </header>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
            {isUserSignedIn && <Text>Login realizado!</Text>}

            <label htmlFor="email">
              <Text className="text-caramel-700 font-semibold">Endereço de e-mail</Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <EnvelopeSimple />
                </TextInput.Icon>

                <TextInput.Input type="email" id="email" placeholder="Digite seu e-mail" />
              </TextInput.Root>
            </label>

            <label htmlFor="password">
              <Text className="text-caramel-700 font-semibold">Senha</Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <Lock />
                </TextInput.Icon>

                <TextInput.Input type="password" id="password" placeholder="Digite sua senha" />
              </TextInput.Root>
            </label>

            <Text asChild size="sm" className="text-end mb-6">
              <a href="#" className="text-caramel-700 underline hover:text-caramel-600">
                Esqueceu a senha?
              </a>
            </Text>

            <Button.Primary type="submit">Entrar</Button.Primary>
          </form>

          <p>ou</p>
          <Button.Secondary onClick={loginGoogle} className="w-full max-w-sm flex justify-center items-center gap-4 h-12">
            <GoogleLogo size={32} weight="fill" />
            Entrar com o Google
          </Button.Secondary>
          <footer className="flex flex-col gap-4 items-center w-full max-w-sm mt-10">
            <Text asChild size="sm">
              <a href="#" className="text-caramel-700 underline hover:text-caramel-600">
                Não possui conta? Crie uma agora!
              </a>
            </Text>
          </footer>
        </div>
      </div>
    );
  }
}
