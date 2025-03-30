import React from "react";

import NavBarr from "../navBarr/navBarr.jsx";

import { useLocation } from "react-router-dom";

function menu({ pages, currentPage, setCurrentPage }) {
  const rota = useLocation();
  // console.log("Pafina atual: ", currentPage)

  return (
    <>
      <span className="lights light-title"></span>
      <h1 style={{ scale: 0.8, marginLeft: "50px", height: "250px" }}>
        <span className="title title1">Ola, seja</span>
        <span className="title title2">Bem Vindo!</span>
        <span className="title title3">
          ao meu {currentPage == "menu" ? "Portfolio" : currentPage}
        </span>
      </h1>
      <nav>
        {pages.map((x) => {
          if (
            rota.pathname == "/" ? x.page == "menu" : rota.pathname == x.page
          ) {
            return (
              <NavBarr
                key={Math.floor(Math.random() * 1000)}
                page={x.page}
                setCurrentPage={setCurrentPage}
                selected={true}
              />
            );
          } else {
            return (
              <NavBarr
                key={Math.floor(Math.random() * 1000)}
                page={x.page}
                setCurrentPage={setCurrentPage}
                selected={false}
              />
            );
          }
        })}
      </nav>
    </>
  );
}

export default menu;
