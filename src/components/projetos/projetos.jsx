import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";

import "./projetos.css";

// imagens dos projetos
import whatsapp2_image from "../../imgs/project/whatsapp2.png"
import CWG_image from "../../imgs/project/cwg.png"

// imagens das Tecnologias usadas
import node_logo from "../../imgs/back-end/node-js.png"
import fastify_logo from "../../imgs/back-end/fastify.jpg"
import postgres_logo from "../../imgs/back-end/postgres.png"

import {useValues} from "../../contex.jsx"

import Project from "./project/project_container.jsx"
import TextAndFilter from "./TextAndFilter/TextAndFilter.jsx"

function projetos() {
  const { part} = useOutletContext();

  const {filterValue, setFilterValue} = useValues()

  // Lista com os projetos feitos
  const listProjects = [
    {
      nome: "WhatsApp 2",
      img: whatsapp2_image,
      tecnologias: [
        node_logo,
        fastify_logo,
        postgres_logo,
      ],
      descricao:
      "Um projeto inspirado no App WhatsApp, feito para demonstrar minhas habilidades com WebSockets e Banco de dados.",
      categoria: ["back-end", "front-end"],
      site: "https://github.com/FerreiroINTZ/Whatsapp-2",
      gitHub: "https://github.com/FerreiroINTZ/Whatsapp-2",
    },
    {
      nome: "Context Word Guess",
      img: CWG_image,
      tecnologias: [
        node_logo,
        fastify_logo,
        postgres_logo,
      ],
      descricao:
        "Um projeto inspirado em um jogo do Tik Tok. O objetivo e adivinhas a palavra do seu oponente.",
      categoria: ["back-end", "front-end"],
      site: "",
      gitHub: "https://github.com/FerreiroINTZ/Context-Words-Guess",
    },
  ];

  const [projects, setProjects] = useState(listProjects);
  const [next_project, setNext_project] = useState(0);
  // responsavel por mechar o carrosel

  useEffect(() => {
    const projectsQtd = projects.filter((x) =>
      filterValue ? x.categoria.includes(filterValue) : true
    ).length;
    if (next_project >= projectsQtd) {
      setNext_project(projectsQtd - 1);
    }
  }, [filterValue]);
  // sempre que o filtro mudar, ele vai ver se a margem ta maior que o necessario

  return (
    <>
      {part == 1 ? (
        <TextAndFilter
          setFilterValue={setFilterValue}
          filterValue={filterValue}
        />
      ) : (
        <Project
          projects={projects}
          margin={next_project}
          nextMargin={setNext_project}
          filterValue={filterValue}
        />
      )}
    </>
  );
}

export default projetos;
