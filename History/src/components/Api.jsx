import { useState, useEffect } from "react";
import s from '../style/Year_Content.module.scss'

import st from '../style/Api.module.scss'



function Api (){


const [time, setTime]= useState([]);

// Get today's date 
const getCurrentDate = () => {
  
const today = new Date();
const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
const day = String(today.getDate()).padStart(2, '0');
return `${month}/${day}`;
};



useEffect (()=>{
    async function getDate (){
      const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${getCurrentDate()}`;
      let res = await fetch(url);
        let data = await res.json()
        console.log(data);
        setTime(data.events); //Shows data
    }
      getDate();
    },[]);

    return(
        <ul>
        
        {time.length > 0 ? (
          time.map((event, index)=>(
          <li key={index}>
                 <div className={s.yearSectionStyle}>
           <section className={s.yearStyle}>
              <div className={s.circle}></div>
              <h2 className={s.yearLineStyle}>{event.year}</h2>
              <p className={s.eventLineStyle}>{event.text}</p>
              <a href="#" className={s.readMoreLink}>Read more <img  className ={st.logoStyle}/></a>
           
           
           </section>
           
            </div>
          </li> 
        
          ))
        ): (
          <p>Loading event...</p>
        )}
        </ul>
    )
}

export default Api