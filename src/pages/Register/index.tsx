import { FormEvent, useContext, useState } from "react";
import { EnvelopeSimple, LockKey } from "phosphor-react";
import { Text } from "../../components/Text";
import { TextInput } from "../../components/TextInput";
import { Button } from "../../components/Button";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../helpers/routes";
import { AuthContext } from "../../contexts/auth";
import { ColorfulLogoDefault as Logo } from "../../assets/ColorfulLogoDefault";
import { isEmptyInput } from "../../helpers/utils";
import SignupImage from "../../assets/illustrations/Signup";

export function Register() {
  const [email, setEmail] = useState<string>("");
  const [isEmailEmpty, setIsEmailEmpty] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [isPasswordEmpty, setIsPasswordEmpty] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { signup, signed } = useContext(AuthContext);

  function handleSubmit(e: FormEvent) {
    if (formIsValid()) {
      setIsLoading(true);
      e.preventDefault();
      signup(email, password);
      setIsLoading(false);
    }
  }

  function formIsValid() {
    if (email.length === 0) {
      setIsEmailEmpty(true);
    }
    if (password.length === 0 || password.length < 6) {
      setIsPasswordEmpty(true);
    }
    return true;
  }

  if (signed) {
    return <Navigate to={ROUTES.NOTES} />;
  } else {
    return (
      <div className="flex h-screen w-screen">
        <div className="flex h-screen w-full flex-col items-center justify-center bg-background-clearLight px-7 md:w-1/2">
          <Logo />
          <header className="mt-8 max-w-sm">
            <Text className="text-dark-heavy">Para criar sua conta é necessário preencher as segiuntes informações:</Text>
          </header>
          <form onSubmit={(e) => handleSubmit(e)} className="mt-10 flex w-full max-w-sm flex-col items-stretch gap-4">
            <label htmlFor="email">
              <Text className="font-semibold text-dark-heavy">Endereço de e-mail</Text>
              <TextInput.Root isEmpty={isEmailEmpty} errorMessage="Informe seu email">
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
              <TextInput.Root isEmpty={isPasswordEmpty} errorMessage="A senha deve possuir no mínimo 6 dígitos">
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

            <Button.Primary type="submit" loading={isLoading}>
              Criar conta
            </Button.Primary>
          </form>
        </div>
        <div className="hidden h-screen flex-col items-center justify-center bg-gradient-to-r from-secondary to-primary md:flex md:w-1/2">
          <SignupImage />
        </div>
      </div>
    );
  }
}
