import { FormEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { EnvelopeSimple, GoogleLogo, LockKey } from "phosphor-react";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";
import { Text } from "../../components/Text";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../helpers/routes";
import { AuthContext } from "../../contexts/auth";
import { Separator } from "../../components/Separator";
import { ColorfulLogoDefault as Logo } from "../../assets/ColorfulLogoDefault";
import { isEmptyInput } from "../../helpers/utils";
import LoginImage from "../../assets/illustrations/LoginImage";

const version = import.meta.env.VITE_VERSION;

export function Signin() {
  const { signin, signinGoogle, signed } = useContext(AuthContext);

  const [email, setEmail] = useState<string>("");
  const [isEmailEmpty, setIsEmailEmpty] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [isPasswordEmpty, setIsPasswordEmpty] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleSubmit(e: FormEvent) {
    if (formIsValid()) {
      setIsLoading(true);
      e.preventDefault();
      signin(email, password);
      setIsLoading(false);
    }
  }

  function loginGoogle() {
    signinGoogle();
  }

  function formIsValid() {
    if (email.length === 0) {
      setIsEmailEmpty(true);
    }
    if (password.length === 0) {
      setIsPasswordEmpty(true);
    }
    return true;
  }

  if (signed) {
    return <Navigate to={ROUTES.NOTES} />;
  } else {
    return (
      <div className="flex h-screen w-screen">
        <div className="flex h-screen w-1/2 flex-col items-center justify-center bg-gradient-to-r from-primary to-secondary">
          <LoginImage />
        </div>
        <div className="flex h-screen w-1/2 flex-col items-center justify-center bg-background-clearLight">
          <Logo />
          <header className="mt-8 max-w-sm">
            <Text className="text-dark-heavy">Insira as informações que você cadastrou ao se registrar na plataforma.</Text>
          </header>

          <form onSubmit={handleSubmit} className="mt-10 flex w-full max-w-sm flex-col items-stretch gap-4">
            <label htmlFor="email">
              <Text className="font-semibold text-dark-heavy">Endereço de e-mail</Text>
              <TextInput.Root isEmpty={isEmailEmpty} errorMessage="Informe o seu e-mail">
                <TextInput.Icon>
                  <EnvelopeSimple />
                </TextInput.Icon>

                <TextInput.Input
                  type="email"
                  id="email"
                  placeholder="Digite seu e-mail"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsEmailEmpty(false);
                  }}
                  onBlur={(e) => setIsEmailEmpty(isEmptyInput(e.target.value))}
                />
              </TextInput.Root>
            </label>

            <label htmlFor="password">
              <Text className="font-semibold text-dark-heavy">Senha</Text>
              <TextInput.Root isEmpty={isPasswordEmpty} errorMessage="Informe sua senha">
                <TextInput.Icon>
                  <LockKey />
                </TextInput.Icon>

                <TextInput.Input
                  type="password"
                  id="password"
                  placeholder="Digite sua senha"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setIsPasswordEmpty(false);
                  }}
                  onBlur={(e) => setIsPasswordEmpty(isEmptyInput(e.target.value))}
                />
              </TextInput.Root>
            </label>

            <Text asChild size="sm" className="mb-6 text-end">
              <a href="#" className="text-dark-heavy underline hover:text-secondary">
                Esqueceu a senha?
              </a>
            </Text>

            <Button.Primary type="submit" loading={isLoading}>
              Entrar
            </Button.Primary>
          </form>

          <footer className="flex w-full max-w-sm flex-col gap-4">
            <Separator.Text text="ou" className="mt-3" />
            <Button.Secondary onClick={loginGoogle} className="flex h-12 w-full max-w-sm items-center justify-center gap-4">
              <GoogleLogo size={32} weight="fill" />
              Entrar com o Google
            </Button.Secondary>
            <Text asChild size="sm" className="flex flex-col items-center">
              <Link to={ROUTES.REGISTER} className="text-dark-heavy underline hover:text-secondary">
                Não possui conta? Crie uma agora!
              </Link>
            </Text>
          </footer>
          <div className="absolute bottom-1 mr-1 self-end text-gray-soft">{version ? version : ""}</div>
        </div>
      </div>
    );
  }
}
