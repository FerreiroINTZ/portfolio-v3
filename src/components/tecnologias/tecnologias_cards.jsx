import React from "react";

function tecnologias_cards({ img , tecnologie, path, selectTecnologie, about}) {
  return (
    <li>
      <input
        type="radio"
        name="tecnologies_cards_inp"
        id={`tecnologies_cards_inp-${img}`}
        hidden
      />
      <label 
        htmlFor={`tecnologies_cards_inp-${img}`} 
        onClick={() => selectTecnologie({tecnologie, img, path, about})}
        >
        <div className="logo"><img src={img} alt={tecnologie} /></div>
      </label>
    </li>
  );
}

export default tecnologias_cards;
