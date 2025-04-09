import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import "./tecnologias.css";

import {useValues} from "../../contex.jsx"

import TecnologiesFields from "./outlet 1/tecnologies_fields.jsx"
import TecnologiesCard from "./outlet 2/tecnologies_card.jsx"

function tecnologias() {
  const outlet = useOutletContext();

  const {currentTecnologie, setCurrentTecnologie} = useValues()
  const {currentTecnologieWay, setCurrentTecnologieWay} = useValues()

  const { page, part } = outlet;

  useEffect(() =>{
    console.log(currentTecnologieWay)
    console.log("")
  }, [])

  return (
    <>
      {
        outlet.part == 1 ? (
          <TecnologiesFields
            setCurrentTecnologie={setCurrentTecnologie}
            setCurrentTecnologieWay={setCurrentTecnologieWay}
            currentTecnologieWay={currentTecnologieWay}
          />
        ) : (
          // exibira o controle de selecao das tecnologias
          <TecnologiesCard currentTecnologie={currentTecnologie} />
          // ""
        )
        // exibira o card explicando sobre a tecnologia
      }
    </>
  );
}

export default tecnologias;
