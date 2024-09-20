import Navigation from "../components/Navigation"
import Header from "../components/Header"
import Hero from "../components/Hero"
import  {Outlet} from "react-router-dom"




function MainLayout (){
    return(
        <>
        <Header />
        <Hero />
        <Navigation/>
         <Outlet/>
       
        </>
    )
}

export default MainLayout