import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Home from "./components/Home.jsx";
import Pokemon from "./components/Pokemon.jsx";
import Details from "./components/Details.jsx";
import AbilityList from "./components/AbilityList.jsx";
import Ability from "./components/Ability.jsx";
import Moves from "./components/Moves.jsx";
import Move from "./components/Move.jsx";

const router = createBrowserRouter([
  {
    path: "/Pokedex",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Pokedex/Pokemon",
    element: <App />,
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
    element: <App />,
    children: [
      {
        path: "",
        element: <AbilityList />,
      },
      {
        path: "/Pokedex/Ability/:name",
        element: <Ability />,
      },
    ],
  },
  {
    path: "/Pokedex/Moves",
    element: <App />,
    children: [
      {
        path: "",
        element: <Moves />,
      },
      {
        path: "/Pokedex/Moves/:name",
        element: <Move />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
