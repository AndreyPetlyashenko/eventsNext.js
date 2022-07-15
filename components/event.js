import Link from "next/link";
import styles from "./event.module.css";
import DateIcon from "./icons/date-icon";
import Button from "./ui/buttons/button";
import AdressIcon from "./icons/address-icon";
import ArrowRightIcon from "./icons/arrow-right-icon";
const Event = ({ data }) => {
  const humanReadableData = new Date(data.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedLocation = data.location.replace(", ", "\n");
  return (
    <li className={styles.item}>
      <img src={`/${data.image}`} alt="img" />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{data.title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanReadableData}</time>
          </div>
          <div className={styles.address}>
            <AdressIcon />
            <address>{formattedLocation}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={`/events/${data.id}`}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};
export default Event;
