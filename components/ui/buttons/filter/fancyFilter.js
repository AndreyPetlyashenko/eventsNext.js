import { useState, useRef } from "react";
import { useRouter } from "next/router";
import Button from "../button";
import styles from "./filter.module.css";

const Filter = () => {
  const yearRef = useRef();
  const monthRef = useRef();
  const [year, setYear] = useState();
  const [month, setMonth] = useState();

  const formSubmitHandler = () => {
    setYear(() => yearRef.current.value);
    setMonth(() => monthRef.current.value);
  };
  return (
    <form
      action={`events/${year}/${month}`}
      className={styles.form}
      onSubmit={formSubmitHandler}
    >
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="month">year</label>
          <select name="year" id="year" ref={yearRef}>
            <option value="2021" >
              2021
            </option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">month</label>
          <select name="month" id="month" ref={monthRef}>
            <option value="1" >
              January
            </option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <Button>Find Event</Button>
      </div>
    </form>
  );
};

export default Filter;
