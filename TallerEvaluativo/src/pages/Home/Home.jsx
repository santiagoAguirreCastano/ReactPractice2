import { Main } from "../../Layouts/Main/Main"
import { useState } from "react"
import { BtnChangeColors } from "../../components/BtnChangeColors/BtnChangeColors"

// Hooks
export const Home = () => {

  const[back, setBack]=useState('#FFFFFF')

  const colores = ["#FF0000","#00FF00","#0000FF","#FFFF00","#FF00FF","#00FFFF", "#000000","#FFFFFF", "#808080", "#800000","#808000", "#800080", "#008080", "#C0C0C0","#FFA500", "#A52A2A"      ]
   

  const changeColor =() =>{
    const random = Math.floor(Math.random() * colores.length)
    const colorRandom = colores[random]
    setBack(colorRandom)
    console.log(colorRandom);

  }

  return (
    <Main>
     <div style={{backgroundColor:back}} className="h-full w-full flex flex-col justify-center items-center">
             <BtnChangeColors change={changeColor}/>
           </div>
    </Main>
  ) }


