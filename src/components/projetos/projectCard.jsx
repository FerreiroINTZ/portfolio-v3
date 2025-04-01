import React from "react";

function projectCard({project}) {
  return (
    <div>
      <p>{project.nome}</p>
      <div id="project-img">
        <img src="../../../public/project/whatsapp2.png" alt="" />
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
        <button>
          <a href={project.site}>Site</a>
        </button>
        <button>
          <a href={project.gitHub} target="__blank">GitHub</a>
        </button>
      </div>
    </div>
  );
}

export default projectCard;
