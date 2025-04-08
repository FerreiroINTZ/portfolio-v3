import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import Menu from "./components/menu/menu_text.jsx";
import Tecnologias from "./components/tecnologias/tecnologias.jsx";
import Projetos from "./components/projetos/projetos.jsx";
import Contatos from "./components/contatos/contatos.jsx";

import { Contexto } from "./contex.jsx";

import { createHashRouter, RouterProvider } from "react-router-dom";

const rotas = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Menu /> },
      { path: "/tecnologias", element: <Tecnologias /> },
      { path: "/projetos", element: <Projetos /> },
      { path: "/contatos", element: <Contatos /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Contexto>
      <RouterProvider router={rotas} />
    </Contexto>
  </StrictMode>
);
