import React, { useEffect, useState } from "react";
import "./tecnologias.css";

import { useOutletContext } from "react-router-dom";

import Cards from "./tecnologias_cards.jsx";

import arrow from "../../imgs/arrow.png"

import js_logo from "../../imgs/front-end/js.png"
import html_logo from "../../imgs/front-end/html-5.png"
import css_logo from "../../imgs/front-end/css-3.png"
import react_logo from "../../imgs/front-end/react-1.svg"
import framerMotion_logo from "../../imgs/front-end/framer-motion.svg"
import next_logo from "../../imgs/front-end/next.jpg"

import node_logo from "../../imgs/back-end/node-js.png"
import fastify_logo from "../../imgs/back-end/fastify.jpg"
import mongoDB_logo from "../../imgs/back-end/mongoDB.png"
import postgres_logo from "../../imgs/back-end/postgres.png"

import git_logo from "../../imgs/tools/git.png"
import vite_logo from "../../imgs/tools/vite.png"
import notion_logo from "../../imgs/tools/notion.png"
import figma_logo from "../../imgs/tools/figma.webp"
import DBdiagram_logo from "../../imgs/tools/dbDiagram.webp"

const TecnologiesField = ({
  setCurrentTecnologie,
  setCurrentTecnologieWay,
  currentTecnologieWay,
}) => {
  // Parte do codigo com o texto e o container com as tecnologias.

  const [tecnologiLabel, setTecnologieLabel] = useState(currentTecnologieWay.split("_"[0]))
  // contera o valor atual da tecnologia, mas formatado

  useEffect(() => {
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
        img: js_logo,
        about: "Uso bastante JavaScript para fazer requisições com fetch, tratar dados das minhas APIs e formatá-los. Também utilizo bastante os métodos de arrays e objetos, principalmente no contexto do React.",
      },
      {
        tecnologie: "HTML",
        img: html_logo,
        about: "Mesmo sendo simples, o HTML é fundamental pela sua semântica, importante tanto para o SEO quanto para análises com ferramentas como o Google Analytics.",
      },
      {
        tecnologie: "CSS",
        img: css_logo,
        about: "Uso o CSS para criar layouts responsivos e estilos estáticos. É uma base essencial para o UX, algo muito importante para conversão e experiência do usuário.",
      },
      {
        tecnologie: "React",
        img: react_logo,
        about: "Uso o React em projetos pessoais ou em casos onde o SEO não é prioridade. Além disso, ele serve como uma boa base para evoluir para o Next.js.",
      },
      {
        tecnologie: "Next",
        img: next_logo,
        about: "O framework ideal hoje em dia para o SEO da pagina. Um pocuo complexo no comeco, mas bem mais valioso do que o React.",
      },
      {
        tecnologie: "Framer Motion",
        img: framerMotion_logo,
        about: "Uso o Framer Motion para criar animações suaves, seja em elementos ou com base no scroll, tornando a interface mais viva e interativa.",
      },
    ],
    Back_End: [
      {
        tecnologie: "Node",
        img: node_logo,
        about: "Uso o Node.js no back-end para criar APIs e também para processar ou salvar dados em massa no banco de dados.",
      },
      {
        tecnologie: "Postgres",
        img: postgres_logo,
        about: "Banco de dados relacional que utilizo quando preciso de maior controle sobre dados e integridade nas relações entre tabelas.",
      },
      {
        tecnologie: "MongoDB",
        img: mongoDB_logo,
        about: "Utilizo o MongoDB quando preciso de flexibilidade na estrutura dos dados. Ótimo para protótipos e projetos com estrutura dinâmica.",
      },
      {
        tecnologie: "Fastify",
        img: fastify_logo,
        about: "Framework que uso para criar APIs de forma rápida e eficiente. Suporta bem recursos como cookies, WebSockets e headers personalizados.",
      },
    ],
    tools:[
      {
        tecnologie: "Git",
        img: git_logo,
        about: "Indispensável para controle de versão e organização dos meus projetos, além de facilitar o trabalho em equipe.",
      },
      {
        tecnologie: "Figma",
        img: figma_logo,
        about: "Uso o Figma para prototipar interfaces dos meus projetos. Mesmo não sendo minha especialidade, sempre começo o design por aqui antes de codar.",
      },
      {
        tecnologie: "Notion",
        img: notion_logo,
        about: "Uso o Notion para organizar minhas tarefas e acompanhar o progresso dos projetos. Me ajuda a manter foco e ter uma visão clara do que falta concluir.",
      },
      {
        tecnologie: "dbDiagram",
        img: DBdiagram_logo,
        about: "Uso o dbDiagram para planejar a estrutura do banco de dados. Facilita a visualização das entidades, relacionamentos e dados necessários.",
      },
      {
        tecnologie: "Vite",
        img: vite_logo,
        about: "Ferramenta que agiliza a criação de projetos em React, evitando configurações manuais. Também oferece recursos modernos que otimizam o desenvolvimento.",
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
                about={x.about}
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
