import { createContext, useContext, useState, useReducer, useEffect } from "react";

export const Context = createContext();

export const Contexto = ({ children }) => {
  const nada = "Gabriel Felipe Ferreira de Oliveira";

  // ============ Projetos ======================================
  
  const [filterValue, setFilterValue] = useState("");
  // filtro dos projetos
  
  // ============ Projetos ======================================

  // ============ Tecnologias ======================================
  
  function changeTecnologieWay(vall) {
      if (vall === "Front_End") {
          return "Back_End";
        } else if (vall === "Back_End") {
      return "tools";
    }
    return "Front_End";
  }

  // Servira como seletor de qual grupo de tecnologias serao exibidos no Outley 1, das Tecnologias
  const [currentTecnologieWay, setCurrentTecnologieWay] = useReducer(
      changeTecnologieWay,
    "Front_End"
);

// Foi usado no Segundo Outlet das Tecnologias
// E a tecnologia atual, selecionada pelo usuario
  const [currentTecnologie, setCurrentTecnologie] = useState({
    tecnologie: "",
    img: "",
  });

// ============ Tecnologias ======================================

  return(  
    <Context.Provider value={{ 
        nada, 
        setCurrentTecnologieWay, 
        currentTecnologieWay, 
        currentTecnologie,
        setCurrentTecnologie,
        filterValue,
        setFilterValue }}>
        {children}
    </Context.Provider>
    ) 
};

export const useValues = () => {
  return useContext(Context);
};
