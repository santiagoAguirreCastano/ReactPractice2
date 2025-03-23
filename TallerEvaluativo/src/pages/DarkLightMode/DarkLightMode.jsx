import { ItemTitles } from "../../components/ItemTitles/ItemTitles"
import { useState } from "react"
import { Main } from "../../Layouts/Main/Main"
import { BtnChangeLigthDarkMode } from "../../components/BtnChangeLigthDarkMode/BtnChangeLigthDarkMode"
export const DarkLightMode = () => {
  const [color,setColor]=useState('#FFFFFF')
  const colores = ["#000000","#FFFFFF"]
  function changeColor(){
    const random = Math.floor(Math.random() * colores.length)
    const colorRandom = colores[random]
    setColor(colorRandom)
    document.body.style.backgroundColor = color
    
  }

  return (
    <Main>
      <div className="h-full w-full flex flex-col justify-center items-center">
        <ItemTitles content="Bienvendio Al Cambio Blanco y Negro" styles="font-bold drop-shadow-lg text-2xl text-gray-300 absolute top-30 left-180 "/>
        <BtnChangeLigthDarkMode changeColor={changeColor}/>
      </div>
      
      
    </Main>
  )
}
