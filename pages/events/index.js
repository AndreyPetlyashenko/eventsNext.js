import { getAllEvents } from "../../dummyData";
import EventList from "../../components/eventList";
import Filter from "../../components/ui/buttons/filter/fancyFilter";
import { useRouter } from "next/router";
const Events = () => {
  const events = getAllEvents();
  const router = useRouter();
  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath);
  };
  return (
    <div>
      <h1>EVENTS</h1>
      <Filter onSearch={findEventHandler} />
      <EventList events={events} />
    </div>
  );
};
export default Events;
