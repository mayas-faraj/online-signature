import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import HomePage from "./pages/HomePage";
import ContractPage from "./pages/ContractPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./styles/globals.scss";
import PageNotFound from "./pages/PageNotFound";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/contract", element: <ContractPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "*", element: <PageNotFound />, errorElement: <ErrorPage /> }
]);

const theme = createTheme({
  palette: {
    primary: {
      main: "#000"
    },
    secondary: {
      main: "#f00"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} fallbackElement={<PageNotFound />} />
    </ThemeProvider>
  );
}

export default App;
