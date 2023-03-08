import { EnvelopeSimple, Lock, NotePencil } from "phosphor-react";
import { Button } from "./components/Button";
import { Heading } from "./components/Heading";
import { Separator } from "./components/Separator";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import "./styles/global.css";

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-400 flex flex-col items-center justify-center">
      <header className="max-w-sm">
        <NotePencil size={42} className="text-caramel-700"  />
        <Heading className="text-caramel-700">Olá 👋</Heading>
        <Text className="text-gray-700">
          Insira as informações que você cadastrou ao se registrar.
        </Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email">
          <Text className="text-caramel-700 font-semibold">
            Endereço de e-mail
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <EnvelopeSimple />
            </TextInput.Icon>

            <TextInput.Input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password">
          <Text className="text-caramel-700 font-semibold">Senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input
              type="password"
              id="password"
              placeholder="Digite sua senha"
            />
          </TextInput.Root>
        </label>

        <Text asChild size="sm" className="text-end mb-6">
          <a
            href="#"
            className="text-caramel-700 underline hover:text-caramel-600"
          >
            Esqueceu a senha?
          </a>
        </Text>

        <Button type="submit">Entrar</Button>
      </form>

      <footer className="flex flex-col gap-4 items-center w-full max-w-sm mt-10">
        {/* <Separator />

        <Button>Entrar com o Google</Button> */}

        <Text asChild size="sm">
          <a
            href="#"
            className="text-caramel-700 underline hover:text-caramel-600"
          >
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}
