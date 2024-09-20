import Header from "../components/Header"
import Hero from "../components/Hero"
import Navigation from "../components/Navigation"
import Content from "../components/Content"
import { useState } from "react"
import ScrollToTop from "react-scroll-to-top";




function Home (){
    const [darkStyle, setDarkStyle] = useState(true);

    const changeTheme = () => {
        setDarkStyle(!darkStyle);
      };

    return(
    <>
    <Header />
    
     <Hero  title="ON THIS DATE" text="What happened on this day - historical events, 
     deaths and births thoughout time"/>
     <Navigation />
     
     <Content darkStyle={darkStyle} changeTheme={changeTheme}/>
     
    </>)
}

export default Home