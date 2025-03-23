
import { NavBar } from '../NavBar/NavBar'
import { ItemNavBar } from '../../components/itemNavBar/ItemNavBar'
import { FaFacebook,FaInstagram,FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
export const Footer = () => {
    return (

      
        <footer className='h-[5rem] w-[100vw] text-center items-center flex justify-center bg-white/20 backdrop-blur-md text-white  p-4 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5'>

            <p className='text-gray-300 drop-shadow-lg'>
                Desarrollado por <strong>Santiago Aguirre</strong>
            </p>
            <NavBar>
                <ul className='flex align-center space-x-4 ml-2'>
                    <ItemNavBar route=''content={<FaFacebook />}styles='text-white' />
                    <ItemNavBar route=''content={<FaInstagram />}styles='text-white' />
                    <ItemNavBar route=''content={<FaTwitter />} styles='text-white'/>
                    <ItemNavBar route=''content={<FaLinkedin />}styles='text-white' />

                </ul>

            </NavBar>


        </footer>
    )
}
