import { NavBar } from '../NavBar/NavBar';
import React, { useState } from "react";
import { ItemTitles } from '../../components/ItemTitles/ItemTitles';
import { ItemNavBar } from '../../components/itemNavBar/ItemNavBar';

export const Header = () => {

  return (
    <header className="sticky top-0 left-0 z-50 bg-rose-500 px-6 py-5 shadow-xl w-full">
      <div className="flex justify-between items-center">
   
        <ItemTitles content="Bienvenido a mi Portafolio" styles="text-2xl sm:text-3xl text-white font-bold" />

        
        <NavBar>
          <ul className='flex align-center space-x-4'>
            <ItemNavBar route="/" content="Home" styles="text-white text-lg" />
            <ItemNavBar route="/DarkLightMode" content="Modo Blanco y Negro" styles="text-white text-lg" />
            <ItemNavBar route="/LikeDislikeButtons" content="Nivel de Inglés" styles="text-white text-lg" />
            <ItemNavBar route="/BgColors" content="Experiencia Profesional" styles="text-white text-lg" />
            <ItemNavBar route="/Counter" content="Habilidades Sociales" styles="text-white text-lg" />
          </ul>
        </NavBar>
      </div>
    </header>
  );
};
