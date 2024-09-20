import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import s from '../style/Events.module.scss'
import book from '../assets/images/Bookmark (1).png'
import light from '../assets/images/Light.png'
import dark from '../assets/images/icons-dark.png'

// Function to fetch events based on day and month
const fetchEvents = async ({ queryKey }) => {
  const [_, day, month] = queryKey; // Destructure queryKey
  const response = await fetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/${month}/${day}`);
  if (!response.ok) {
    throw new Error('Failed to fetch events');
  }
  return response.json();
};

const Events = ({day, month, darkStyle, changeTheme}) => {

  const { data, error, isLoading} = useQuery({
    queryKey: ['events', day, month],
    queryFn: fetchEvents,
  })

  return (
    <section className={darkStyle ? s.dark : s.light}>
    
    <img  onClick={changeTheme} className={s.lampImage} src={darkStyle? light: dark} alt="lamp-img" /> 
      <h1 className={s.titleStyle}>What Happened on {day}/{month}</h1>

      {isLoading && <p>Loading...</p>}

      {error && <p>{error.message}</p>}

      {data && data.events && (
        <ul className={s.eventsStyle}>
          {data.events.length > 0 ? (
            data.events.map((event, index) => (
              <li key={index} className={s.eventItemStyle}>
                <section className={s.yearSectionStyle}>
                <article className={`${s.yearStyle} ${index % 2 === 0 ? s.yearStyleRight : s.yearStyleLeft}`}>
                <div className={`${s.circle} ${index % 2 === 0 ? s.circle : s.circleLeft}`}></div>
                <h3 className={`${s.yearTitleStyle} ${index % 2 === 0 ? s.yearTitleStyle : s.yearTitleStyleLeft}`}>Year:{event.year}</h3>
                <p className={`${s.textStyle} ${index % 2 === 0 ? s.textStyle : s.textStyleLeft}`}>{event.text}</p>
                {event.pages && event.pages.length > 0 && (
                  <footer className={`${s.tagStyle} ${index % 2 === 0 ? s.tagStyle : s.tagStyleLeft}`}>
                  <a className={s.readMoreLink} href={event.pages[0].content_urls.desktop.page} target="_blank" rel="noopener noreferrer"> Read more
                  <img src={book} className={s.bookStyle} alt="book-icon" /></a>
                  </footer>
                )}
                </article>
                </section>
              </li>
            ))
          ) : (
            <p>No events found for this date.</p>
          )}
        </ul>
      )}
    </section>
  );
};

export default Events;
