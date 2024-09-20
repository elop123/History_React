import { useQueryClient, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";


function Api2 ({selectYear}) {
    const[years, setYears] = useState([]);
    
    const url =  `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${selectYear}`;
   

const queryClient= useQueryClient()

//Queries
const {isLoading, error, data} = useQuery({
    queryKey:['events.year', selectYear],
    queryFn: ()=> fetch(url).then(res => res.json()),
    staleTime: 1000 * 600,
})
//console.log(data)

if(isLoading){
    return
        <div>Loading....</div> 
}

if (error) {
    return <div>Error fetching data...</div>
}

//Cheking data if it exists
 if (!data || !data.events || data.events.length === 0) {
    return <p>No events found for the year {selectYear}.</p>;
  }

 // Filter events based on the selected year
 const filteredEvents = data.events[0].filter((event) => event.year === parseInt(selectYear));

    return(
    
       
        <ul>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <li key={index}>
              <h2>{event.year}</h2>
              <p>{event.text}</p>
            </li>
          ))
        ) : (
          <p>No events found for the year {selectYear}.</p>
        )}
      </ul>
        
    )
}

export default Api2