import React, { useEffect, useState } from "react";
import "./tecnologias.css";

import { useLocation, useOutletContext } from "react-router-dom";

import Cards from "./tecnologias_cards.jsx";

import arrow from "../../imgs/arrow.png"

const TecnologiesField = ({
  setCurrentTecnologie,
  setCurrentTecnologieWay,
  currentTecnologieWay,
}) => {
  // Parte do codigo com o texto e o container com as tecnologias.

  const [tecnologiLabel, setTecnologieLabel] = useState(currentTecnologieWay.split("_"[0]))
  // contera o valor atual da tecnologia,  mas formatado

  useEffect(() => {
    console.log("CurrentTecnologiWay: ", currentTecnologieWay);
    console.log("tecnologieLabel: ", tecnologiLabel);
    const newLabel = 
      `${currentTecnologieWay.split("_")[0]}
       ${currentTecnologieWay.split("_")[1] 
          ? currentTecnologieWay.split("_")[1]
          : ''}`
    setTecnologieLabel(newLabel)
  }, [currentTecnologieWay]);

  const myTecnologies = {
    Front_End: [
      {
        tecnologie: "JavaScript",
        img: "js.png",
        path: "front-end",
        about: "",
      },
      {
        tecnologie: "HTML",
        img: "html-5.png",
        path: "front-end",
        about: "",
      },
      {
        tecnologie: "CSS",
        img: "css-3.png",
        path: "front-end",
        about: "",
      },
      {
        tecnologie: "React",
        img: "react-1.svg",
        path: "front-end",
        about: "",
      },
      {
        tecnologie: "Next",
        img: "next.jpg",
        path: "front-end",
        about: "",
      },
      {
        tecnologie: "Framer Motion",
        img: "framer-motion.svg",
        path: "front-end",
        path: "front-end",
        about: "",
      },
    ],
    Back_End: [
      {
        tecnologie: "Node",
        img: "node-js.png",
        path: "back-end",
        about: "",
      },
      {
        tecnologie: "Postgres",
        img: "postgres.png",
        path: "back-end",
        about: "",
      },
      {
        tecnologie: "MongoDB",
        img: "mongoDB.png",
        path: "back-end",
        about: "",
      },
      {
        tecnologie: "Fastify",
        img: "fastify.jpg",
        path: "back-end",
        about: "",
      },
    ],
    tools:[
      {
        tecnologie: "Git",
        img: "git.png",
        path: "ferramentas",
        about: "",
      },
      {
        tecnologie: "Figma",
        img: "figma.webp",
        path: "ferramentas",
        about: "",
      },
      {
        tecnologie: "Notion",
        img: "notion.png",
        path: "ferramentas",
        about: "",
      },
      {
        tecnologie: "dbDiagram",
        img: "dbDiagram.webp",
        path: "ferramentas",
        about: "",
      },
      {
        tecnologie: "Vite",
        img: "vite.png",
        path: "ferramentas",
        about: "",
      }
    ]
  };

  return (
    <>
      <p>
        Meu foco é no front-end, mas muitas vezes desenvolvo um back-end para
        estender as capacidades dos meus projetos. Atualmente estou estudando
        Java, para ter ainda mais possibilidades nos meus projetos ou no mercado
        de trabalho.
      </p>
      <div id="tecnologies-container">
        <ul id="tecnologies-field">
          {myTecnologies[currentTecnologieWay]?.map(
            (x) => (
              <Cards
                key={x.tecnologie}
                img={x.img}
                tecnologie={x.tecnologie}
                path={x.path}
                selectTecnologie={setCurrentTecnologie}
              />
              // cards do container
            )
          )}
        </ul>
        <div id="tecnologies-way-label">{tecnologiLabel}</div>
        <div id="next-arrow-left" onClick={() => setCurrentTecnologieWay()}><img src={arrow} alt="arrow" /></div>
      </div>
    </>
  );
};

function TecnologiesCard({ currentTecnologie }) {
  // Parte do site que exibe o nome, imagem e sobre a tecnologia.

  return (
    <div id="tecnologie-explained-contaner">
      <span style={{top: "300px"}} className="lights light-code-logo"></span>
      <div id="tecnologie-explained_img-title">
        <h3 id="tecnologie-explained-title">
          {currentTecnologie.tecnologie
            ? currentTecnologie.tecnologie
            : "Selecione uma tecnologia"}
        </h3>
        <div id="tecnologie-explained-img">
          {currentTecnologie.img ? (
            <img
              src={`../../../public/${currentTecnologie.path}/${currentTecnologie.img}`}
              alt={currentTecnologie.tecnologie}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div id="tecnologie-explained-field">
        {currentTecnologie.about 
          ? currentTecnologie.about
          : "Ao selecionar alguma tecnologia, sera explicado um pouco sobre seu uso em meus projetos."}
      </div>
    </div>
  );
}

function tecnologias() {
  const outlet = useOutletContext();

  const { page } = outlet;
  // conter qual pagina sera renderizada primeiro
  const { currentTecnologie, setCurrentTecnologie } = outlet;
  // manipulara qual tecnologia foi escolhida
  const { currentTecnologieWay, setCurrentTecnologieWay } = outlet;
  // pega os states passado pelo Outlet que foram criados no App.jsx

  useEffect(() =>{
    setCurrentTecnologieWay()
  }, [])

  return (
    <div>
      {
        outlet.part == 1 ? (
          <TecnologiesField
            setCurrentTecnologie={setCurrentTecnologie}
            setCurrentTecnologieWay={setCurrentTecnologieWay}
            currentTecnologieWay={currentTecnologieWay}
          />
        ) : (
          // exibira o controle de selecao das tecnologias
          <TecnologiesCard currentTecnologie={currentTecnologie} />
        )
        // exibira o card explicando sobre a tecnologia
      }
    </div>
  );
}

export default tecnologias;
