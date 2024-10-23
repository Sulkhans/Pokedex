import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Pokemon from "./components/Pokemon.jsx";
import Details from "./components/details/Details.jsx";
import Abilities from "./components/Abilities.jsx";
import Moves from "./components/Moves.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/Pokedex"} />,
  },
  {
    path: "/Pokedex",
    element: <Navigate to={"/Pokedex/Pokemon"} />,
  },
  {
    path: "/Pokedex/Pokemon",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Pokemon />,
      },
      {
        path: "/Pokedex/Pokemon/:id",
        element: <Details />,
      },
    ],
  },
  {
    path: "/Pokedex/Ability",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Abilities />,
      },
    ],
  },
  {
    path: "/Pokedex/Move",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Moves />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
