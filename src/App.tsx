import { AuthGoogleProvider } from "./contexts/auth";
import { AppRoutes } from "./routes/routes";
import "./styles/global.css";

export function App() {
  return (
    <AuthGoogleProvider>
      <AppRoutes />
    </AuthGoogleProvider>
  );
}
