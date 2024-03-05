import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Home from "./components/Home.jsx";
import Pokemon from "./components/Pokemon.jsx";
import Details from "./components/Details.jsx";
import Abilities from "./components/Abilities.jsx";
import Ability from "./components/Ability.jsx";
import Moves from "./components/Moves.jsx";
import Move from "./components/Move.jsx";
import Items from "./components/Items.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/Pokedex"} />,
  },
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
        element: <Abilities />,
      },
      {
        path: "/Pokedex/Ability/:name",
        element: <Ability />,
      },
    ],
  },
  {
    path: "/Pokedex/Move",
    element: <App />,
    children: [
      {
        path: "",
        element: <Moves />,
      },
      {
        path: "/Pokedex/Move/:name",
        element: <Move />,
      },
    ],
  },
  {
    path: "/Pokedex/Item",
    element: <App />,
    children: [
      {
        path: "",
        element: <Items />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
