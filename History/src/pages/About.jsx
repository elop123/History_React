
import AboutContent from "../components/AboutContent"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Navigation from "../components/Navigation"




function About (){



    return(
    <>
    <Header />
     <Hero title="ABOUT" text="What happened on this day -
      a specific year to get only events for that year" />
     <Navigation />
    <AboutContent />
    
    </>)
}

export default About