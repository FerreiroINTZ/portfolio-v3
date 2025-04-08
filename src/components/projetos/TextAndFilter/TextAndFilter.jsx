import { useEffect } from "react";

function TextANDfilter({ setFilterValue, filterValue }) {
    useEffect(() => {
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

  export default TextANDfilter