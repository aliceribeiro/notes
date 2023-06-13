import { createContext, useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../services/firebaseConfig";

const provider = new GoogleAuthProvider();

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const AuthGoogleContext = createContext({ signed: false, user: {}, signinGoogle: () => {} });

// TODO: corrigir tipagem
export const AuthGoogleProvider = ({ children }: any) => {
  const auth = getAuth(app);

  const [user, setUser] = useState<any>(null);

  function signinGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken ?? "";
        const user = result.user;
        setUser(user);
        sessionStorage.setItem("@AuthFirebase:token", token);
        sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  useEffect(() => {
    const checkUserData = () => {
      const storageToken = sessionStorage.getItem("@AuthFirebase:token");
      const storageUser = sessionStorage.getItem("@AuthFirebase:user");

      if (storageToken && storageUser) {
        setUser(storageUser);
      }
    };

    checkUserData();
  });

  return (
    <AuthGoogleContext.Provider
      value={{
        signed: !!user,
        user,
        signinGoogle
        // TODO: criar função de logout
      }}
    >
      {children}
    </AuthGoogleContext.Provider>
  );
};
