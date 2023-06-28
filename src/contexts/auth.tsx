/* eslint-disable @typescript-eslint/no-empty-function */
import { ReactNode, createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { app } from "../services/firebaseConfig";
import { ROUTES } from "../helpers/routes";
import { collection, doc, getDoc, getFirestore, setDoc, updateDoc } from "firebase/firestore";

interface AuthContextProps {
  signed: boolean;
  user: User | null | string;
  signin: (email: string, password: string) => void;
  signinGoogle: () => void;
  signup: (email: string, password: string) => void;
  logout: () => JSX.Element;
  fetchUserData: () => void;
  notes: Note[];
}

interface AuthProviderProps {
  children: ReactNode;
}

interface UserData {
  email: string;
  userId: string;
  notes: Note[];
}

export interface Note {
  title: string;
  categories: string[];
  note: string;
  lastUpdate: string;
}

const provider = new GoogleAuthProvider();

export const db = getFirestore(app);

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
  logout: () => <Navigate to={ROUTES.BASE} />,
  fetchUserData: () => {},
  notes: []
});

export const AuthGoogleProvider = ({ children }: AuthProviderProps) => {
  const auth = getAuth(app);

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const [loggedUser, setLoggedUser] = useState<User | null | string>(null);
  const [notes, setNotes] = useState<Note[]>([]);

  const addUserIndDatabase = async (uid: string, userData: { email: string }) => {
    const userCollectionRef = doc(collection(db, "users"), uid);
    await setDoc(userCollectionRef, userData);
  };

  async function addUserIndDatabaseByGoogle(userID: string, userData: UserData) {
    const userDocRef = doc(db, "users", userID);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      const existingUserData = userDocSnapshot.data() as UserData;
      const mergedNotes = [...existingUserData.notes, ...userData.notes];

      await updateDoc(userDocRef, { notes: mergedNotes });
    } else {
      await setDoc(userDocRef, userData);
    }
  }

  function signin(email: string, password: string) {
    signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        userCredential?.user
          .getIdToken()
          .then((accessToken) => {
            setLoggedUser(userCredential.user);
            sessionStorage.setItem("@AuthFirebase:token", accessToken);
            sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(userCredential?.user));
            sessionStorage.setItem("@AuthFirebase:userID", userCredential.user.uid);
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
        const userData = { email: user.email ?? "", userId: user.uid, notes: [] };
        addUserIndDatabaseByGoogle(user.uid, userData);
        setLoggedUser(user);
        sessionStorage.setItem("@AuthFirebase:token", token);
        sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
        sessionStorage.setItem("@AuthFirebase:userID", user.uid);
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
        const userData = { email, userId: data?.user.uid };
        addUserIndDatabase(uid, userData);
        data?.user
          .getIdToken()
          .then((accessToken) => {
            setLoggedUser(data.user);
            sessionStorage.setItem("@AuthFirebase:token", accessToken);
            sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(data?.user));
            sessionStorage.setItem("@AuthFirebase:userID", data.user.uid);
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

  const fetchUserData = async () => {
    const userId = sessionStorage.getItem("@AuthFirebase:userID") ?? "";
    const userRef = doc(collection(db, "users"), userId);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();
      setNotes(userData.notes);
    } else {
      throw new Error("Documento do usuário não encontrado");
    }
  };

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
        logout,
        fetchUserData,
        notes: notes
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
