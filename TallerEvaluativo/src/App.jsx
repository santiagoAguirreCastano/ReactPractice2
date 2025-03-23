import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { Header } from "./Layouts/Header/Header" 
import { Footer } from "./Layouts/Footer/Footer"
import { DarkLightMode } from "./pages/DarkLightMode/DarkLightMode"
import { LikeDislikeButtons } from "./pages/LikeDislikeButtons/LikeDislikeButtons"
import { Counter } from "./pages/Counter/Counter"

export const App = ()=>{
    return(
   
        
        <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DarkLightMode" element={<DarkLightMode />} />
        <Route path="/LikeDislikeButtons" element={<LikeDislikeButtons />} />
        <Route path="/Counter" element={<Counter />} />

        
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
      

    )
}