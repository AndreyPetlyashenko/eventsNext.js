
import Event from './event'
import styles from './eventList.module.css'
const EventList = ({ events}) => {
  return (
    <ul className={styles.list} >
      {events.map((event) => (
        <Event data={event} key={event.id} />
      ))}
    </ul>
  );
};
export default EventList;
