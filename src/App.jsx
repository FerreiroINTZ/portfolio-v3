import { useState, useEffect } from "react";
import code_logo from "./imgs/code.png";

import { Outlet, useLocation } from "react-router-dom";

import Menu from "./components/menu/menu.jsx";
import Projetos from "./components/projetos/projetos.jsx";
import Contatos from "./components/contatos/contatos.jsx";

function App() {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState("menu");

  const [currentTecnologie, setCurrentTecnologie] = useState({tecnologie: "", img: ""})
  // sera usado nas tecnologias

  const rota = useLocation();

  useEffect(() => {
    setPages([
      { page: "menu", componente: <Menu /> },
      { page: "tecnologias"},
      { page: "projetos", componente: <Projetos /> },
      { page: "contatos", componente: <Contatos /> },
    ]);
    // console.log(rota.pathname);
  }, []);
  return (
    <>
      <div id="body-pt1">
        <Menu 
          pages={pages} 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          style={{scale: 0.5}}/>
        <div id="rota" style={{scale: 1}}>
          <Outlet context={{part: 1, currentTecnologie, setCurrentTecnologie}}/>
        </div>
      </div>
      <div id="body-pt2">
        {rota.pathname == "/"
          ? <>
              <img src={code_logo} alt="" />
              <span className="lights light-code-logo"></span>
            </>
          : <Outlet context={{part: 2, currentTecnologie, setCurrentTecnologie}} />}
      </div>
    </>
  );
}

export default App;
