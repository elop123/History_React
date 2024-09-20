import { useState, useEffect } from "react";
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
          <li key={index} className={s.timelineItem} >
             
          <section className={s.yearSectionStyle}>
          <article className={`${s.yearStyle} ${index % 2 === 0 ? s.yearStyleRight : s.yearStyleLeft}`}>
              <div className={`${s.circle} ${index % 2 === 0 ? s.circle : s.circleLeft}`}></div>
              <h2 className={`${s.yearLineStyle} ${index % 2 === 0 ? s.yearLineStyle : s.yearLineStyleLeft}`}>YEAR:{event.year}</h2>
              <p className={`${s.eventLineStyle} ${index % 2 === 0 ? s.eventLineStyle : s.eventLineStyleLeft}`}>{event.text}<br/></p> 
              <footer className={`${s.tagStyle} ${index % 2 === 0 ? s.tagStyle : s.tagStyleLeft}`}>
              {event.pages && event.pages.length > 0 && event.pages[0]?.content_urls?.desktop?.page && (
              <a  className={s.readMoreLink} href={event.pages[0].content_urls.desktop.page} target="_blank" rel="noopener noreferrer">Read More 
                <img src={book} className={s.bookStyle} alt="book-icon" /></a>)}
              </footer>
              
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