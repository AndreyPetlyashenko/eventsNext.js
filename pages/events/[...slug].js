import { useRouter } from "next/router";
import EventList from "../../components/eventList";
import { getFilteredEvents } from "../../dummyData";
const FilteredEvents = ({ data }) => {
  const router = useRouter();
  const date = router.query.slug;
  if (!date) return <p>nothing</p>;

  const [year, month] = date

  console.log(
    "🚀 ~ file: [...slug].js ~ line 11 ~ FilteredEvents ~ lookingDate",
    { year, month}
  );
  const events = getFilteredEvents({year, month});
  console.log("🚀 ~ file: [...slug].js ~ line 14 ~ FilteredEvents ~ events", {events})
  return (
    <>
      <h1>FilteredEvents</h1>
      <EventList events={events} />
    </>
  );
};
export default FilteredEvents;
