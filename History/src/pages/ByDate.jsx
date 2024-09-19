import { useState, useEffect } from "react"
import Events from "../components/Events"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Navigation from "../components/Navigation"




function ByDate (){
    const [date, setDate] = useState('');  // The date in "dd/mm" format
  const [day, setDay] = useState(null);  // The extracted day
  const [month, setMonth] = useState(null); // The extracted month

   // Handle form submission and extract day/month
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
        ON:{" "} 
        <form onSubmit={handleSubmit}>
        <input 
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="22/08"
              required
              />
            <button type="submit">Events</button>
            </form>
        </>}
           text="What happened on this day - Here you can enter
                 a specific date to get only events that happened on this date"/>
     <Navigation />
    <Events day={day} month={month} />
    </>)
}

export default ByDate