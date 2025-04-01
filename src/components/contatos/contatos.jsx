import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";

import "./contatos.css";

import linkedin from "../../imgs/contatos/linkedin.png";
import e_mail from "../../imgs/contatos/gmail.png";
import git_hub from "../../imgs/contatos/github.png";

function ContatosCards() {
  const [isShow, setIsShow] = useState(false);

  async function copiar(opt) {
    switch (opt) {
      case "linkedin":
        console.log("linkedin");
        await navigator.clipboard.writeText(
          "www.linkedin.com/in/gabriel-felipe-ferreira-de-oliveira-25a335239"
        );
        break;
      case "e-mail":
        console.log("E-Mail");
        await navigator.clipboard.writeText("gabrielferreiro963@gmail.com");
        break;
      case "github":
        console.log("Git Hub");
        await navigator.clipboard.writeText("https://github.com/FerreiroINTZ");
        break;
    }
    setIsShow(true)
  }

  return (
    <>
      <span
        style={{ top: "325px", right: "500px" }}
        className="lights light-code-logo"
      ></span>
      <ul id="contatos-container">
        <li
          title="www.linkedin.com/in/gabriel-felipe-ferreira-de-oliveira-25a335239"
          onClick={() => copiar("linkedin")}
        >
          <div className="contatos-logos">
            <img src={linkedin} alt="" />
          </div>
          <p>Linkedin</p>
        </li>
        <li
          title="gabrielferreiro963@gmail.com"
          onClick={() => copiar("e-mail")}
        >
          <div className="contatos-logos">
            <img src={e_mail} alt="" />
          </div>
          <p>E-Mail</p>
        </li>
        <li
          title="https://github.com/FerreiroINTZ"
          onClick={() => copiar("github")}
        >
          <div className="contatos-logos">
            <img src={git_hub} alt="" />
          </div>
          <p>GitHub</p>
        </li>
      </ul>
      <motion.p
        id="msg-de-texto-copiado"
        initial={{ opacity: 0 }}
        animate={isShow ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 0.3,
          repeat: 1,
          repeatType: "reverse",
          repeatDelay: 1,
        }}
        onAnimationComplete={() => setIsShow(false)}
      >
        Texto copiado com Sucesso!
      </motion.p>
    </>
  );
}

function contatos() {
  const { part } = useOutletContext();

  return (
    <>
      {part == 1 ? (
        <p>
          Sinta-se a vontade para escolher qual forma ira entrara em contato
          comigo. Aproveite para fechar contratos, ou sugerir algo que eu possa
          mudar em algum projeto.
        </p>
      ) : (
        <ContatosCards />
      )}
    </>
  );
}

export default contatos;
