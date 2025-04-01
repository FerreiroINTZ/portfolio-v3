import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Text from "./components/text/text.jsx"
import Tecnologias from "./components/tecnologias/tecnologias.jsx"
import Projetos from "./components/projetos/projetos.jsx";
import Contatos from "./components/contatos/contatos.jsx";

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const rotas = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    children: [
      {path: '/', element: <Text />},
      {path: '/tecnologias', element: <Tecnologias />},
      {path: '/projetos', element: <Projetos />},
      {path: '/contatos', element: <Contatos />},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rotas}/>
  </StrictMode>,
)
