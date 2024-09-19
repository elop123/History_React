
import AboutContent from "../components/AboutContent"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Navigation from "../components/Navigation"




function About (){



    return(
    <>
    <Header />
     <Hero title="ABOUT" text="What happened on this day -
      a website where you can find different history events on a specific year, on a specific date" />
     <Navigation />
    <AboutContent />
    
    </>)
}

export default About