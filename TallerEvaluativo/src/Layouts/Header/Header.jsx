import { NavBar } from '../NavBar/NavBar';
import { ItemTitles } from '../../components/ItemTitles/ItemTitles';
import { ItemNavBar } from '../../components/itemNavBar/ItemNavBar';

export const Header = () => {

  return (
    <header className="sticky top-0 left-0 z-50 px-6 py-5 shadow-xl w-full bg-white/20 backdrop-blur-md text-gray-300 p-4 shadow-lg rounded-lg">
      <div className="flex justify-between items-center">
   
        <ItemTitles content="BIENVENIDO AL TALLER EVALUATIVO" styles=" font-bold drop-shadow-lg text-2xl text-gray-300 " />

        
        <NavBar>
          <ul className='flex align-center space-x-4'>
            <ItemNavBar route="/" content="Cambio de Color" styles="text-gray-300 text-lg drop-shadow-lg" />
            <ItemNavBar route="/DarkLightMode" content="Modo Blanco y Negro" styles="text-gray-300 text-lg drop-shadow-lg" />
            <ItemNavBar route="/LikeDislikeButtons" content="Like y Dislike" styles="text-gray-300 text-lg drop-shadow-lg" />
            <ItemNavBar route="/Counter" content="Contador" styles="text-gray-300 text-lg drop-shadow-lg" />
          </ul>
        </NavBar>
      </div>
    </header>
  );
};
