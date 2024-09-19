import Header from "../components/Header"
import Hero from "../components/Hero"
import Navigation from "../components/Navigation"
import Content from "../components/Content"



function Home (){


    return(
    <>
    <Header />
     <Hero  title="ON THIS DATE" text="What happened on this day - historical events, 
     deaths and births thoughout time"/>
     <Navigation />
     <Content />
    
    </>)
}

export default Home