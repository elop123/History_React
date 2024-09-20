import Header from "../components/Header"
import Hero from "../components/Hero"
import s from '../style/NoPage.module.scss'


function NoPage (){
    return(
        <div className= {s.noPageStyle}>
         <Header />
         <Hero  title="404 - Page Not Found"/>
        </ div>
    )
}

export default NoPage