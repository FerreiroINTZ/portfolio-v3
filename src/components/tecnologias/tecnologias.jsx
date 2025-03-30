import React, { useEffect, useState } from 'react'
import "./tecnologias.css"

import { useLocation, useOutletContext } from 'react-router-dom'

import Cards from "./tecnologias_cards.jsx"

const TecnologiesField = ({setCurrentTecnologie}) =>{
// Parte do codigo com o texto e o container com as tecnologias.

  const front_end_imgs = [
    {
      tecnologie: "JavaScript", 
      img: "js.png", 
      about: ""},
    {
      tecnologie: "HTML", 
      img: "html-5.png", 
      about: ""},
    {
      tecnologie: "CSS", 
      img: "css-3.png", 
      about: ""},
    {
      tecnologie: "React", 
      img: "react-1.svg", 
      about: ""},
    {
      tecnologie: "Next", 
      img: "next.jpg", 
      about: ""},
    {
      tecnologie: "Framer Motion", 
      img: "framer-motion.svg", 
      about: ""},
  ]

  return(
    <>
      <p>
        Meu foco é no front-end, mas muitas vezes desenvolvo um back-end para estender as capacidades dos meus projetos. Atualmente estou estudando Java, para ter ainda mais possibilidades nos meus projetos ou no mercado de trabalho.
      </p>
      <ul id="tecnologies-field">
        {front_end_imgs.map(x => 
          <Cards 
            key={x.tecnologie}
            img={x.img} 
            tecnologie={x.tecnologie}
            selectTecnologie={setCurrentTecnologie}/>
          // cards do container
        )}
      </ul>
    </>
  )
}

function TecnologiesCard({currentTecnologie}){
// Parte do site que exibe o nome, imagem e sobre a tecnologia.
  
  return(
    <div id="tecnologie-explained-contaner">
      <div id="tecnologie-explained_img-title">
        <h3 id="tecnologie-explained-title">{currentTecnologie.tecnologie
              ? currentTecnologie.tecnologie
              : "Selecione uma tecnologia"}</h3>
        <div id='tecnologie-explained-img'>
          {currentTecnologie.img
          ? <img src={`../../../public/front-end/${currentTecnologie.img}`} alt={currentTecnologie.tecnologie} />
        : "" }
        </div>
      </div>
      <div id="tecnologie-explained-field">
        Ao selecionar alguma tecnologia, sera explicado um pouco sobre seu uso em meus projetos.
  </div>
    </div>
  )
}


function tecnologias() {

  // contem a tecnologia que o usuario selecionou
  
  const rota = useLocation()
  const outlet = useOutletContext()
  const {page, currentTecnologie, setCurrentTecnologie} = outlet
  // pega os states passado pelo Outlet que foram criados no App.jsx

  useEffect(()=>{
    console.log(currentTecnologie)
  }, [currentTecnologie])

  return (
    <div>
      
      {outlet.part == 1
        ? <TecnologiesField setCurrentTecnologie={setCurrentTecnologie}/> 
          // exibira o controle de selecao das tecnologias
        : <TecnologiesCard currentTecnologie={currentTecnologie} /> 
          // exibira o card explicando sobre a tecnologia
      }
    </div>
  )
}

export default tecnologias