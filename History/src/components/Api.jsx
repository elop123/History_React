import { useState, useEffect } from "react";
import lamp from '../assets/images/Light.png'
import s from '../style/Api.module.scss'
import book from '../assets/images/Bookmark (1).png'



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
        <ul className={s.timeline}>
        
        {time.length > 0 ? (
          time.map((event, index)=>(
          <li key={index} className={s.timelineItem}>
             {/* <img  className={s.lampImage} src={lamp} alt="lamp-img" /> */}
          <section className={s.yearSectionStyle}>
           <article className={s.yearStyle}>
              <div className={s.circle}></div>
              <h2 className={s.yearLineStyle}>YEAR:{event.year}</h2>
              <p className={s.eventLineStyle}>{event.text}<br/><a href="#" className={s.readMoreLink}>
                Read more</a> <img className={s.bookStyle} src={book} alt="book-icon" /></p>
           </article>
          </section>
          
            
         
         
          
         
            
         
          </li> 
        
          ))
        ): (
          <p>Loading event...</p>
        )}
        </ul>
    )
}

export default Api