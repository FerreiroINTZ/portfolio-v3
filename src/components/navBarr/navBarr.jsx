import React from 'react'

import { useNavigate } from 'react-router-dom'

function navBarr({page, selected, setCurrentPage}) {
  
  const navigator = useNavigate()

  function changePage(){
    setCurrentPage(page)
    if(page == "menu"){
      navigator("/")
    }else{
      navigator(`/${page}`)
    }
    console.log("pagina mudada")
  }

  if(selected){
    return (
          <>
              <input 
                type="radio" 
                name="select-section" 
                id={`inp-${page}`} 
                value={page} 
                selected
                hidden/>
              <label 
                htmlFor={`inp-${page}`} 
                id={`label-inp-${page}`}
                onClick={() => changePage()}>{page}</label>
              </> 
        )
  }else{
    return(
          <>
              <input 
                type="radio" 
                name="select-section" 
                id={`inp-${page}`} 
                value={page} 
                hidden
                onClick={() => changePage()}/>
              <label htmlFor={`inp-${page}`} id={`label-inp-${page}`}>{page}</label>
              </> 

    )
  }
  }

export default navBarr