import React from "react";

import NavBarr from "../navBarr/navBarr.jsx";

import { useLocation } from "react-router-dom";
import {useState, useEffect} from "react"

function menu({ pages, currentPage, setCurrentPage }) {
  const rota = useLocation();
  // console.log("Pafina atual: ", currentPage)
  const [texto, setTexto] = useState()

  useEffect(() =>{
    console.log("Pages: ")
    const newRota = rota.pathname.split("/")[1]
    console.log(newRota)
    switch (newRota) {
      case "tecnologias":
          setTexto("as minhas Tecnologias.")
        break;
      case "projetos":
          setTexto("aos meus Projetos.")
        break;
      case "contatos":
          setTexto("aos meus Contatos.")
        break;
        default:
          setTexto("ao meu Portfolio.")
        break;
    }
  }, [rota])

  return (
    <>
      {/* <span className="lights light-title"></span> */}
      {/* Luz de fundo do title */}
      <h1>
        <span className="title title1">Ola, seja</span>
        <span className="title title2">Bem Vindo!</span>
        <span className="title title3">{texto}</span>
      </h1>
      <nav>
        {pages.map((x) => {
            return (
              <NavBarr
                key={x.page}
                page={x.page}
                setCurrentPage={setCurrentPage}
              />
            );
        })}
      </nav>
    </>
  );
}

export default menu;
