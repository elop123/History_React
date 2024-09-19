import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';


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

  // Using react-query's useQuery to fetch events when the day and month are available
  const { data, error, isLoading} = useQuery({
    queryKey: ['events', day, month],
    queryFn: fetchEvents,
  })

  return (
    <div>
      <h1>What Happened on {day}/{month}</h1>


      {/* Display loading, error or the fetched data */}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {data && data.events && (
        <div className="events-timeline">
          {data.events.length > 0 ? (
            data.events.map((event, index) => (
              <div key={index} className="event-item">
                <h3>Year: {event.year}</h3>
                <p>{event.text}</p>
                {event.pages && event.pages.length > 0 && (
                  <a
                    href={`https://en.wikipedia.org/wiki/${event.pages[0]}`}
                    target="_blank"
                  >
                    Read more
                  </a>
                )}
              </div>
            ))
          ) : (
            <p>No events found for this date.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Events;
