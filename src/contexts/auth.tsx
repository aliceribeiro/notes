/* eslint-disable @typescript-eslint/no-empty-function */
import { ReactNode, createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { app } from "../services/firebaseConfig";
import { ROUTES } from "../helpers/routes";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";

interface AuthContextProps {
  signed: boolean;
  user: User | null | string;
  signin: (email: string, password: string) => void;
  signinGoogle: () => void;
  signup: (email: string, password: string) => void;
  logout: () => JSX.Element;
}

interface AuthProviderProps {
  children: ReactNode;
}

const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export const AuthContext = createContext<AuthContextProps>({
  signed: false,
  user: null,
  signin: (email: string, password: string) => {
    if (!email && !password) {
      throw new Error("Não foi possível processar sua solicitação");
    }
  },
  signinGoogle: () => {},
  signup: (email: string, password: string) => {
    if (!email && !password) {
      throw new Error("Não foi possível processar sua solicitação");
    }
  },
  logout: () => <Navigate to={ROUTES.BASE} />
});

export const AuthGoogleProvider = ({ children }: AuthProviderProps) => {
  const auth = getAuth(app);

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const [loggedUser, setLoggedUser] = useState<User | null | string>(null);

  const addUserIndDatabase = async (uid: string, userData: { email: string }) => {
    const userCollectionRef = doc(collection(db, "users"), uid);
    await setDoc(userCollectionRef, userData);
  };

  function signin(email: string, password: string) {
    signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        userCredential?.user
          .getIdToken()
          .then((accessToken) => {
            setLoggedUser(userCredential.user);
            sessionStorage.setItem("@AuthFirebase:token", accessToken);
            sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(userCredential?.user));
          })
          .catch((error) => {
            throw new Error("Erro ao obter accessToken:", error);
          });
      })
      .catch((error) => {
        throw new Error("Erro ao autenticar:", error);
      });
  }

  function signinGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken ?? "";
        const user = result.user;
        const userData = { email: user.email ?? "" };
        addUserIndDatabase(user.uid, userData);
        setLoggedUser(user);
        sessionStorage.setItem("@AuthFirebase:token", token);
        sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        throw new Error(errorCode, errorMessage);
      });
  }

  function signup(email: string, password: string) {
    createUserWithEmailAndPassword(email, password)
      .then((data) => {
        const uid = data?.user.uid ?? "";
        const userData = { email };
        addUserIndDatabase(uid, userData);
        data?.user
          .getIdToken()
          .then((accessToken) => {
            setLoggedUser(data.user);
            sessionStorage.setItem("@AuthFirebase:token", accessToken);
            sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(data?.user));
          })
          .catch((error) => {
            throw new Error("Erro ao obter accessToken:", error);
          });
      })
      .catch((error) => {
        throw new Error("Erro ao autenticar:", error);
      });
  }

  function logout() {
    sessionStorage.clear();
    setLoggedUser(null);
    return <Navigate to={ROUTES.BASE} />;
  }

  useEffect(() => {
    const checkUserData = () => {
      const storageToken = sessionStorage.getItem("@AuthFirebase:token");
      const storageUser = sessionStorage.getItem("@AuthFirebase:user");

      if (storageToken && storageUser) {
        setLoggedUser(storageUser);
      }
    };

    checkUserData();
  });

  return (
    <AuthContext.Provider
      value={{
        signed: !!loggedUser,
        user: loggedUser,
        signin,
        signinGoogle,
        signup,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
