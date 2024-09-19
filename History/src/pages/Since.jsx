import { useState } from "react"
import Api2 from "../components/Api2"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Navigation from "../components/Navigation"
import s from '../style/Since.module.scss'



function Since (){

const [selectYear, setSelectYear] = useState("");
const [inputYear, setInputYear] = useState("");

function handleYearChange(e){
    setSelectYear(e.target.value)
}

// Trigger fetch by setting selectYear
function handleClick() {
    setSelectYear(inputYear);
  }

    return(
    <>
    <Header />
     <Hero title={
          <>
            SINCE:{" "}
            <input className={s.inputYear}
              type="text"
              onChange={handleYearChange}
              value={selectYear}
            />
            <button onClick={handleClick}>Get Events</button>
          </>
        }text="What happened on this day - Here you can enter
      a specific year to get only events for that year" />
     <Navigation />
     <Api2  selectYear={selectYear} />
    
    </>)
}

export default Since