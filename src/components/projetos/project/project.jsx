import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import arrow from "../../../imgs/arrow.png";

import ProjectCard from "./projectCard";

function Project({ projects, margin, nextMargin, filterValue }) {
    useEffect(() => {
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

  export default Project