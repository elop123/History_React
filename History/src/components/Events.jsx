import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import s from '../style/Events.module.scss'

// Function to fetch events based on day and month
const fetchEvents = async ({ queryKey }) => {
  const [_, day, month] = queryKey; // Destructure queryKey
  const response = await fetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/${month}/${day}`);
  if (!response.ok) {
    throw new Error('Failed to fetch events');
  }
  return response.json();
};

const Events = ({day, month}) => {

  const { data, error, isLoading} = useQuery({
    queryKey: ['events', day, month],
    queryFn: fetchEvents,
  })

  return (
    <section>
      <h1 className={s.titleStyle}>What Happened on {day}/{month}</h1>

      {isLoading && <p>Loading...</p>}

      {error && <p>{error.message}</p>}

      {data && data.events && (
        <ul className={s.eventsStyle}>
          {data.events.length > 0 ? (
            data.events.map((event, index) => (
              <li key={index} className={s.eventItemStyle}>
                <section className={s.yearSectionStyle}>
                <article className={s.yearStyle}>
                <div className={s.circle}></div>
                <h3 className={s.yearTitleStyle}>Year:{event.year}</h3>
                <p className={s.textStyle}>{event.text}</p>
                {event.pages && event.pages.length > 0 && (
                  <a
                    href={`https://en.wikipedia.org/wiki/${event.pages[0]}`}
                    target="_blank"
                  >
                    Read more
                  </a>
               
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
