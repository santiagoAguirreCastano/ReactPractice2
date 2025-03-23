import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { Header } from "./Layouts/Header/Header" 
import { Footer } from "./Layouts/Footer/Footer"
import { DarkLightMode } from "./pages/DarkLightMode/DarkLightMode"

export const App = ()=>{
    return(
   
        
        <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DarkLightMode" element={<DarkLightMode />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />

        
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
      

    )
}