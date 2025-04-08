import React, { useEffect, useState } from 'react'

import { useNavigate, useLocation } from 'react-router-dom'

function navBarr({page, setCurrentPage}) {

  const path = useLocation()
  const navigator = useNavigate()
  
  const [pageSelected, sePageSelected] = 
    useState(page === "menu" 
              ? true 
              : path.pathname.slice(1) == page 
                ? true
                : false)

    useEffect(() =>{
    }, [])

  function changePage(){
    setCurrentPage(page)
    if(page == "menu"){
      navigator("/")
    }else{
      navigator(`/${page}`)
    }
    console.log("pagina mudada")
  }

    return (
          <>
              <input 
                type="radio" 
                name="select-section" 
                id={`inp-${page}`} 
                value={page} 
                defaultChecked={pageSelected}
                hidden/>
              <label 
                htmlFor={`inp-${page}`} 
                id={`label-inp-${page}`}
                onClick={() => changePage()}>{page}</label>
              </> 
        )
  }

export default navBarr