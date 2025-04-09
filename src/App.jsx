import { useState, useEffect, useReducer } from "react";

import { Outlet, useLocation } from "react-router-dom";

import Title from "./components/title/title.jsx";
import Menu_logo from "./components/menu/menu_logo.jsx"

import {useValues} from "./contex.jsx"

function App() {
  const rota = useLocation();

  const [pages, setPages] = useState([]);
  //contem as secoes do site
  const [currentPage, setCurrentPage] = useState("menu");
  // contem a secao atual do site

  // ============= MANTER =======================
  useEffect(() => {
    setPages([
      { page: "menu"},
      { page: "tecnologias"},
      { page: "projetos"},
      { page: "contatos"},
    ]);
  }, []);

  // Muda o nome da janela
  useEffect(() =>{
    const path = rota.pathname
    if(path == "/"){
      document.title = "Site | Menu"
    }else{
      document.title = `Site | ${path.slice(1)}`
    }
  }, [rota])

  // ============= MANTER =======================
 
  return (
    <>
      <div id="body-pt1">
        <Title 
          pages={pages} 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          style={{scale: 0.5}}/>
        <div id="rota">
          <Outlet context={{
            part: 1}}/>
        </div>
      </div>
      <div id="body-pt2">
        {rota.pathname == "/"
          ? <Menu_logo />
          : <Outlet context={{
            part: 2}} />}
      </div>
    </>
  );
}

export default App;
