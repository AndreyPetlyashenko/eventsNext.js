import { getAllEvents } from "../../dummyData";
import EventList from "../../components/eventList";
import Filter from "../../components/ui/buttons/filter/fancyFilter";
const Events = () => {
  const events = getAllEvents();
  return (
    <div>
      <h1>EVENTS</h1>
      <Filter/>
      <EventList events={events} />
    </div>
  );
};
export default Events;
