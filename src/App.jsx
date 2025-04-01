import { useState, useEffect, useReducer } from "react";
import code_logo from "./imgs/code.png";

import { Outlet, useLocation } from "react-router-dom";

import Menu from "./components/menu/menu.jsx";

function App() {
  const [pages, setPages] = useState([]);
  //contem as secoes do site
  const [currentPage, setCurrentPage] = useState("menu");
  // contem a secao atual do site

  function changeTecnologieWay(vall){
    console.log(vall)
    if(vall === "Front_End"){
      return "Back_End"
    }else if(vall === "Back_End"){
      return "tools"
    }
    return "Front_End"
  }

  const [currentTecnologieWay, setCurrentTecnologieWay] = 
    useReducer(changeTecnologieWay, "Front_End", () => {return "tools"})
    //era pra o "init" retornar "Front-End", resolver isso depois
  // contera qual vertente sera exibidas (front-end; back-end; tools)
  const [currentTecnologie, setCurrentTecnologie] = useState({tecnologie: "", img: ""})
  // sera usado nas tecnologias

  const rota = useLocation();

  useEffect(() => {
    setPages([
      { page: "menu", componente: <Menu /> },
      { page: "tecnologias"},
      { page: "projetos"},
      { page: "contatos"},
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
          <Outlet context={{
            part: 1, 
            currentTecnologie, 
            setCurrentTecnologie, 
            currentTecnologieWay, 
            setCurrentTecnologieWay}}/>
        </div>
      </div>
      <div id="body-pt2">
        {rota.pathname == "/"
          ? <>
              <img src={code_logo} alt="" />
              <span className="lights light-code-logo"></span>
            </>
          : <Outlet context={{
            part: 2, 
            currentTecnologie, 
            setCurrentTecnologie,
            currentTecnologieWay,
            setCurrentTecnologieWay}} />}
      </div>
    </>
  );
}

export default App;
