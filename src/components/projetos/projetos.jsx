import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";

import "./projetos.css";
import ProjectCard from "./projectCard.jsx";
import arrow from "../../imgs/arrow.png";

import whatsapp2_image from "../../imgs/project/whatsapp2.png"
import CWG_image from "../../imgs/project/cwg.png"

import node_logo from "../../imgs/back-end/node-js.png"
import fastify_logo from "../../imgs/back-end/fastify.jpg"
import postgres_logo from "../../imgs/back-end/postgres.png"

function TextANDfilter({ setFilterValue, filterValue }) {
  useEffect(() => {
    console.log("Foi remderizadop!");
  }, []);

  return (
    <>
      <p>
        Veja alguns do meus projetos feitos durante minha jornada como
        desenvolvedor ate hoje. Sele cione um filtro para apenas projetos que
        tenha back-end, os que tem apenas front-end, ou todas os projetos.
      </p>
      <div id="projects-filter">
        <div>
          <input
            type="radio"
            id="inp-projects-filter_todos"
            name="filters"
            value="todos"
            defaultChecked={filterValue == ""}
            hidden
          />
          <label
            htmlFor="inp-projects-filter_todos"
            id="label-projects-filter_todos"
            onClick={(e) => setFilterValue("")}
          >
            Todos
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="inp-projects_front-end"
            name="filters"
            defaultChecked={filterValue == "front-end"}
            hidden
          />
          <label
            htmlFor="inp-projects_front-end"
            onClick={(e) => setFilterValue("front-end")}
          >
            Front End
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="inp-projects-filter_back-end"
            name="filters"
            defaultChecked={filterValue == "back-end"}
            hidden
          />
          <label
            htmlFor="inp-projects-filter_back-end"
            onClick={(e) => setFilterValue("back-end")}
          >
            Back End
          </label>
        </div>
      </div>
    </>
  );
}

function Project({ projects, margin, nextMargin, filterValue }) {
  useEffect(() => {
    console.log("Filter value: ", filterValue);
  }, [filterValue]);
  return (
    <div id="project-container">
      <button
        id="projectArrow-back"
        className="projectArrows"
        onClick={() => {
          const projectsQtd = projects.filter((x) =>
            filterValue ? x.categoria.includes(filterValue) : true
          ).length;

          if (margin > 0) {
            nextMargin((x) => {
              return x - 1;
            });
            // verifica se ele pode voltar
          } else if (margin == 0)
            nextMargin((x) => {
              return projectsQtd - 1;
            });
          // se a margem estiver no comeco, ele pode ir para o final
        }}
      >
        <img src={arrow} alt="" />
      </button>
      <div id="project-card">
        <motion.div
          id="project_carrosel"
          initial={{ x: "0px" }}
          animate={{ x: `-${400 * margin}px` }}
        >
          {projects
            .filter((x) =>
              filterValue ? x.categoria.includes(filterValue) : true
            )
            .map((x, index) => (
              <ProjectCard
                key={x.nome}
                project={x}
                index={index}
                currentProject={margin}
              />
            ))}
        </motion.div>
      </div>

      <button
        id="projectArrow-next"
        className="projectArrows"
        onClick={() => {
          const projectsQtd = projects.filter((x) =>
            filterValue ? x.categoria.includes(filterValue) : true
          ).length;

          if (projectsQtd - 1 > margin) {
            nextMargin((x) => {
              return x + 1;
            });
            // verifica se ele pode prosseguir
          } else if (projectsQtd > margin) {
            nextMargin((x) => {
              return 0;
            });
            // se a margem estiver maior que o necessario, ele volta pro comeco
          }
        }}
      >
        <img src={arrow} alt="" />
      </button>
    </div>
  );
}

function projetos() {
  const { part, filterValue, setFilterValue } = useOutletContext();



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
        <TextANDfilter
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
