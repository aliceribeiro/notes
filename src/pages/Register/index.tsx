import { FormEvent, useContext, useState } from "react";
import { EnvelopeSimple, Lock } from "phosphor-react";
import { Text } from "../../components/Text";
import { TextInput } from "../../components/TextInput";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../helpers/routes";
import { AuthContext } from "../../contexts/auth";
import SignupImage from "../../assets/illustrations/Signup";

export function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { signup, signed } = useContext(AuthContext);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    signup(email, password);
  }

  if (signed) {
    return <Navigate to={ROUTES.HOME} />;
  } else {
    return (
      <div className="flex h-screen w-screen">
        <div className="flex h-screen w-1/2 flex-col items-center justify-center bg-gray-400">
          <header className="max-w-sm">
            <Heading className="text-caramel-700">Olá 👋</Heading>
            <Text className="text-gray-700">Para criar sua conta é necessário preencher as segiuntes informações:</Text>
          </header>
          <form onSubmit={(e) => handleSubmit(e)} className="mt-10 flex w-full max-w-sm flex-col items-stretch gap-4">
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

            <Button.Primary type="submit">Criar conta</Button.Primary>
          </form>
        </div>
        <div className="flex h-screen w-1/2 flex-col items-center justify-center bg-caramel-200-tp">
          <SignupImage />
        </div>
      </div>
    );
  }
}
