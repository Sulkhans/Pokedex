import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Home from "./components/Home.jsx";
import Pokemon from "./components/Pokemon.jsx";
import Details from "./components/Details.jsx";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
