import { FormEvent, useState } from "react";
import { ColorfulLogoDefault as Logo } from "../../assets/ColorfulLogoDefault";
import { Text } from "../../components/Text";
import { TextInput } from "../../components/TextInput";
import { EnvelopeSimple } from "phosphor-react";
import { isEmptyInput } from "../../helpers/utils";
import { Button } from "../../components/Button";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";

export function PasswordRecovery() {
  const [email, setEmail] = useState<string>("");
  const [isEmailEmpty, setIsEmailEmpty] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleSubmit(e: FormEvent) {
    if (formIsValid()) {
      setIsLoading(true);
      e.preventDefault();
      recoverPassword(email);
      setIsLoading(false);
    }
  }

  function formIsValid() {
    if (email.length === 0) {
      setIsEmailEmpty(true);
    }
    return true;
  }

  function recoverPassword(userEmail: string) {
    sendPasswordResetEmail(auth, userEmail)
      .then(() => alert("Email enviado com sucesso"))
      .catch((error) => alert(error));
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-background-clearLight">
      <div className="rounded p-2">
        <div className="flex justify-center">
          <Logo />
        </div>
        <header className="mt-8 max-w-sm">
          <Text className="text-dark-heavy">Enviaremos um e-mail para recuperação de senha</Text>
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
          <Button.Primary type="submit" loading={isLoading}>
            Enviar
          </Button.Primary>
        </form>
      </div>
    </div>
  );
}
