import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import "./projetos.css"
import ProjectCard from "./projectCard.jsx"
import arrow from "../../imgs/arrow.png"

function TextANDfilter({setFilterValue, filterValue}) {
  useEffect(() => {
    console.log("Foi remderizadop!");
  }, []);

  return (
    <>
      <p>
        Veja alguns do meus projetos feitos durante minha jornada como
        desenvolvedor ate hoje. Sele cione um filtro para apenas projetos que tenha back-end, os que tem apenas front-end, ou todas os projetos.
      </p>
      <div id="projects-filter">
        <div>
          <input
            type="radio"
            id="inp-projects-filter_todos"
            name="filters"
            value="todos"
            checked={filterValue == "todos"}
            hidden/>
          <label
            htmlFor="inp-projects-filter_todos"
            id="label-projects-filter_todos"
            onClick={e => setFilterValue("todos")}
            >Todos</label>
        </div>
        <div>
          <input
            type="radio"
            id="inp-projects_front-end"
            name="filters"
            checked={filterValue == "front-end"}
            hidden/>
          <label 
            htmlFor="inp-projects_front-end"
            onClick={e => setFilterValue("front-end")}>Front End</label>
        </div>
        <div>
          <input
            type="radio"
            id="inp-projects-filter_back-end"
            name="filters"
            checked={filterValue == "back-end"}
            hidden/>
          <label 
            htmlFor="inp-projects-filter_back-end"
            onClick={e => setFilterValue("back-end")}>Back End</label>
        </div>
      </div>
    </>
  );
}

function Project({projects}){
  return(
    <div id="project-card">
      <ProjectCard project={projects[0]}/>
      {/* <button className="projectArrow-next"><img src={arrow} alt="" /></button> */}
    </div>
  )
}

function projetos() {
  const { part } = useOutletContext();

  const [filterValue, setFilterValue] = useState("todos")

  const listProjects = [
    {
      nome: "WhatsApp 2",
      img: "../../../public/project/whatsaap2.png",
      tecnologias: ["back-end/node-js.png", "back-end/fastify.jpg", "back-end/postgres.png"],
      descricao: "Um projeto inspirado no App WhatsApp, feito para demonstrar minhas habilidades com WebSockets e Banco de dados.",
      categoria: "back-end",
      site: "",
      gitHub: "https://github.com/FerreiroINTZ/Whatsapp-2"
    },
    {
      nome: "Context Word Guess",
      tecnologias: ["back-end/node-js.png", "back-end/fastify.jpg", "back-end/postgres.jpg"],
      descricao: "Um projeto inspirado em um jogo que vi no tik tok, onde vode tem que adivinhas as palavras da outra pesso.",
      categoria: "back-end",
      site: "",
      gitHub: ""
    },
  ]

  const [projects, setProjects] = useState(listProjects)

  useEffect(() => {
    console.log(filterValue);
  }, [filterValue]);
  return <>{part == 1 
              ? <TextANDfilter 
                  setFilterValue={setFilterValue}
                  filterValue={filterValue}/> 
              : <Project projects={projects}/>}</>;
}

export default projetos;
