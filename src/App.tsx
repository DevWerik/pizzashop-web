import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Toaster } from  "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";
import "./global.css";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
      <Helmet defaultTitle="%s | pizza.shop"/>
      <Toaster richColors  />
      <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )

}
