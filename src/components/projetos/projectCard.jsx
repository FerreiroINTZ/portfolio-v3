import React, { useEffect } from "react";
import { motion } from "framer-motion";

function projectCard({project, currentProject, index}) {

  return (
    <motion.div 
      className="singleProject" 
      animate={index == currentProject ? {opacity: 1} : {opacity: .5}}>
      <p>{project.nome}</p>
      <div id="project-img">
        <img src={`../../../public/project/${project.img}`} alt="" />
      </div>
      <ul id="projectTecnologies">
        {project.tecnologias.map((x) => (
          <li>
            <img src={`../../../public/${x}`} />
          </li>
        ))}
      </ul>
      <p className="project-description">{project.descricao}</p>
      <div className="project-actions">
        <button disabled={index == currentProject}>
          <a href={project.site}>Site</a>
        </button>
        <button disabled={index == currentProject}>
          <a href={project.gitHub} target="__blank">GitHub</a>
        </button>
      </div>
    </motion.div>
  );
}

export default projectCard;
