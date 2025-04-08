function TecnologiesCard({ currentTecnologie }) {
    // Parte do site que exibe o nome, imagem e sobre a tecnologia.
  
    return (
      <div id="tecnologie-explained-contaner">
        <span style={{top: "300px"}} className="lights light-code-logo"></span>
        <div id="tecnologie-explained_img-title">
          <h3 id="tecnologie-explained-title">
            {currentTecnologie.tecnologie
              ? currentTecnologie.tecnologie
              : "Selecione uma tecnologia"}
          </h3>
          <div id="tecnologie-explained-img">
            {currentTecnologie.img ? (
              <img
                src={currentTecnologie.img}
                alt={currentTecnologie.tecnologie}
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div id="tecnologie-explained-field">
          {currentTecnologie.about 
            ? currentTecnologie.about
            : "Ao selecionar alguma tecnologia, sera explicado um pouco sobre seu uso em meus projetos."}
        </div>
      </div>
    );
  }

  export default TecnologiesCard