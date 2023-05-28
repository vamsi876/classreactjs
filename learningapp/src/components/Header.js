import React, { useState } from 'react'
import Footer from  "./Footer"
import Title from './Title'
export default function Header({name, setName, showtitlepage, setshowtitlepage}) {

  function handleClick(){
    setName("herovired")
    setshowtitlepage(false)
  }
  function returnn(){
    setName("hero")
    setshowtitlepage(true)
  }
  return (
    
    
    <div>
      this is header: welcome to react 
      <div>
        your name is : {name}
        <button onClick={handleClick}>change</button>
        <button onClick={returnn}>return</button>
      </div>
      this is title page:{showtitlepage ? <Title/> : null}
    </div>
  )
}
