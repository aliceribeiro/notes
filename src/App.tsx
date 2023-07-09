import { AuthGoogleProvider } from "./contexts/auth";
import { SidebarProvider } from "./contexts/sidebar";
import { AppRoutes } from "./routes/routes";
import "./styles/global.css";

export function App() {
  return (
    <AuthGoogleProvider>
      <SidebarProvider>
        <AppRoutes />
      </SidebarProvider>
    </AuthGoogleProvider>
  );
}
