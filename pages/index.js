import {getFeaturedEvents} from '../dummyData'
import EventList from '../components/eventList'

      <EventList events={getFeaturedEvents()}/>
const HomePage =()=>{
    const featuredEvents = getFeaturedEvents();
    return (
        <div>
           <h1>Home Page</h1> 
           <EventList events={featuredEvents}/>
        </div>
    )
}

export default HomePage;