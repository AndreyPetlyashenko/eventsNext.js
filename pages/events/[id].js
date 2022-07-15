import { useRouter } from "next/router";
import { getEventById } from "../../dummyData";
import Event from "../../components/event";
import EventSummary from "../../components/event-detail/event-summary";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
const EventID = () => {
  const router = useRouter();
  const item = getEventById(router.query.id);
  if (!item) return <p>No Event found</p>;
  return (
    <>
      <EventSummary title={item.title} />
      <EventLogistics
        date={item.date}
        address={item.location}
        image={item.image}
        imageAlt={item.title}
      />
      <EventContent>
        <p>{item.description}</p>
      </EventContent>
    </>
  );
};
export default EventID;
