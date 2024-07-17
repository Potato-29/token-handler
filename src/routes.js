import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Tokens from "./pages/Tokens";

// const Home = lazy(async () => await import("./pages/Home"));
// const Tokens = lazy(async () => await import("./pages/Tokens"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tokens",
    element: <Tokens />,
  },
]);
