import Header from "../components/Header"
import Hero from "../components/Hero"
import Navigation from "../components/Navigation"
import Content from "../components/Content"
import ScrollButton from "../components/ScrollButton"
import { useState } from "react"



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
     <ScrollButton />
     <Content darkStyle={darkStyle} changeTheme={changeTheme}/>
   
    </>)
}

export default Home