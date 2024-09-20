import { useState, useEffect } from "react"
import Events from "../components/Events"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Navigation from "../components/Navigation"
import s from '../style/ByDateStyle.module.scss'





function ByDate (){
  const [date, setDate] = useState('');  
  const [day, setDay] = useState(null); 
  const [month, setMonth] = useState(null); 

  const [darkStyle, setDarkStyle] = useState(true);

    const changeTheme = () => {
        setDarkStyle(prev => !prev);
    };


   // Handle form  extract day/month
   const handleSubmit = (e) => {
    e.preventDefault();
    const [enteredDay, enteredMonth] = date.split('/');
    
    // Ensure both day and month are valid before updating state
    if (enteredDay && enteredMonth) {
      setDay(enteredDay);
      setMonth(enteredMonth);
    }
  };
  
    return(
    <>
    <Header />
     <Hero title={
        <>
        ON: 
        <form onSubmit={handleSubmit} className={s.formContainer}>
        <input className={s.inputStyle}
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="22/08"
              required
              />
            <button type="submit">Find</button>
            </form>
        </>}
           text="What happened on this day - Here you can enter
                 a specific date to get only events that happened on this date"/>
     <Navigation />
    
      
    <Events day={day} month={month} darkStyle={darkStyle} changeTheme={changeTheme}/>
    </>)
}

export default ByDate