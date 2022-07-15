import { useRouter } from "next/router";
import EventList from "../../components/eventList";
import { getFilteredEvents } from "../../dummyData";
const FilteredEvents = () => {
  const router = useRouter();
  const date = router.query.slug;
  if (!date) return <p className="center">Loading...</p>;
  if (!date.length >= 3) return <p className="center">404 ERRR</p>;
  const [year, month] = date;
  const events = getFilteredEvents({ year: +year, month: +month });

  return (
    <>
      <h1>FilteredEvents</h1>
      <EventList events={events} />
    </>
  );
};
export default FilteredEvents;
