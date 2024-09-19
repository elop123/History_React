import s from '../style/About.module.scss'

function AboutContent(){
    return(
    <section className={s.aboutSection}>
    <p>Welcome to What Happened on This Day, a website designed to give you a glimpse into history by 
        focusing on key moments that occurred on a specific date throughout time.</p>
<p>Whether you’re a history enthusiast or just curious about what happened on any given day, 
    our site provides a unique way to explore the past. From groundbreaking historical events to 
    notable births and deaths, you'll uncover fascinating facts that shaped the world as we know it.
</p>
<h2>Features of the Site:</h2>
<ul>
    <li>Today’s History: Want to know what happened on this day in history? Our "Today’s History" 
        page gives you a curated selection of important moments that occurred on today’s date, offering 
        insights into the people and events that left their </li>
<li>Choose Your Date: Have a specific date in mind? Use our "Pick a Date" feature to search for 
    significant historical events, births, and deaths on any day of your choosing. It’s a great 
    tool for finding out what was happening in the world during important personal moments like 
    your birthday or other special dates.
</li>
</ul>
        </section>)
}


    export default AboutContent