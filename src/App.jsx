import { useState, useEffect } from "react"
import code_logo from "./imgs/code.png"

import Menu from "./components/menu/menu.jsx"
import Tecnologias from "./components/tecnologias/tecnologias.jsx"

function App() {
  const [pages, setPages] = useState()
  const [currentPage, setCurrentPage] = useState("menu")

  useEffect(() =>{
    setPages([
      {page: "menu", componente: <Menu />},
      {page: "tecnologias", componente: <Tecnologias />}
    ])
  }, [])
  return (
    <>
      <div id="body-pt1">
        <span className="lights light-title"></span>
      <h1>
        <span className="title title1">Ola, seja</span>
        <span className="title title2">Bem Vindo!</span>
        <span className="title title3">ao meu Portfolio</span>
      </h1>
      <nav>
        {/* Transfoemar isto em um componente */}
        <input 
          type="radio" 
          name="select-section" 
          id="inp-menu" 
          value="menu" 
          hidden/>
        <label htmlFor="inp-menu" id="label-inp-menu">Menu</label>
        <input 
          type="radio" 
          name="select-section" 
          id="inp-tecnologias" 
          value="tecnologias" 
          hidden/>
        <label htmlFor="inp-tecnologias" id="label-inp-tecnologias">Tecnologias</label>
        <input 
          type="radio" 
          name="select-section"  
          id="inp-projetos" 
          value="projetos" 
          hidden/>
        <label htmlFor="inp-projetos" id="label-inp-projetos">Projetos</label>
        <input 
          type="radio" 
          name="select-section" 
          id="inp-contatos" 
          value="contatos"
          hidden/>
        <label htmlFor="inp-contatos" id="label-inp-contatos">Contatos</label>
      </nav>
      <p>Portfolio de um desenvolvedor Full-Stack em busca de projetos ou vagas. Capaz de criar aplicacoes web com ou sem APIs proprias. No front-end, sendo capaz de criar animacoes e responsividade usando frameworks e conceitos de responsividade. No Back-end capaz de criar sistemas de autenticacao, cookies, Banco de dados, e/ou features expecificas. Sempre estou aprendendo coisas novas.</p>
      </div>
      <div id="code-img">
        <img src={code_logo} alt="" />
        <span className="lights light-code-logo"></span>
      </div>
    </>
  )
}

export default App