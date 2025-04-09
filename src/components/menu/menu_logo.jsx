import React from 'react'
import code_logo from "../../imgs/code.png";

function menu_logo() {
  return (
    <div id="menu-logo">
              <img src={code_logo} alt="" />
              <span className="lights light-code-logo"></span>
            </div>
  )
}

export default menu_logo