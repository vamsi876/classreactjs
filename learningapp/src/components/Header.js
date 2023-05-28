import React, { useState } from 'react'
import Footer from  "./Footer"
export default function Header({name, setName}) {

  function handleClick(){
    setName("herovired")
  }
  function returnn(){
    setName("hero")
  }
  return (
    
    
    <div>
      this is header: welcome to react 
      <div>
        your name is : {name}
        <button onClick={handleClick}>change</button>
        <button onClick={returnn}>return</button>
      </div>
    </div>
  )
}
