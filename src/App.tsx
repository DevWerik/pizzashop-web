import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { HelmetProvider, Helmet } from "react-helmet-async";
import "./global.css";

export function App() {
  return (
    <HelmetProvider>
      <Helmet defaultTitle="%s | pizza.shop"/>
      <RouterProvider router={router} />
    </HelmetProvider>
  )

}
