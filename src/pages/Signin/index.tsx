import { FormEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { NotePencil, EnvelopeSimple, Lock, GoogleLogo } from "phosphor-react";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { TextInput } from "../../components/TextInput";
import { Text } from "../../components/Text";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../helpers/routes";
import { AuthContext } from "../../contexts/auth";
import { Separator } from "../../components/Separator";
import LoginImage from "../../assets/illustrations/LoginImage";

const version = import.meta.env.VITE_VERSION;

export function Signin() {
  const { signin, signinGoogle, signed } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    signin(email, password);
  }

  function loginGoogle() {
    signinGoogle();
  }

  if (signed) {
    return <Navigate to={ROUTES.HOME} />;
  } else {
    return (
      <div className="flex h-screen w-screen">
        <div className="flex h-screen w-1/2 flex-col items-center justify-center bg-caramel-200-tp">
          <LoginImage />
          <div className="text-caramel-200-tp">{version ? version : ""}</div>
        </div>
        <div className="flex h-screen w-1/2 flex-col items-center justify-center bg-gray-400">
          <header className="max-w-sm">
            <NotePencil size={42} className="text-caramel-700" />
            <Heading className="text-caramel-700">Olá 👋</Heading>
            <Text className="text-gray-700">Insira as informações que você cadastrou ao se registrar.</Text>
          </header>

          <form onSubmit={handleSubmit} className="mt-10 flex w-full max-w-sm flex-col items-stretch gap-4">
            <label htmlFor="email">
              <Text className="font-semibold text-caramel-700">Endereço de e-mail</Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <EnvelopeSimple />
                </TextInput.Icon>

                <TextInput.Input type="email" id="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} />
              </TextInput.Root>
            </label>

            <label htmlFor="password">
              <Text className="font-semibold text-caramel-700">Senha</Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <Lock />
                </TextInput.Icon>

                <TextInput.Input type="password" id="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)} />
              </TextInput.Root>
            </label>

            <Text asChild size="sm" className="mb-6 text-end">
              <a href="#" className="text-caramel-700 underline hover:text-caramel-600">
                Esqueceu a senha?
              </a>
            </Text>

            <Button.Primary type="submit">Entrar</Button.Primary>
          </form>

          <footer className="flex w-full max-w-sm flex-col gap-4">
            <Separator.Text text="ou" className="mt-3" />
            <Button.Secondary onClick={loginGoogle} className="flex h-12 w-full max-w-sm items-center justify-center gap-4">
              <GoogleLogo size={32} weight="fill" />
              Entrar com o Google
            </Button.Secondary>
            <Text asChild size="sm" className="flex flex-col items-center">
              <Link to={ROUTES.REGISTER} className="text-caramel-700 underline hover:text-caramel-600">
                Não possui conta? Crie uma agora!
              </Link>
            </Text>
          </footer>
        </div>
      </div>
    );
  }
}
