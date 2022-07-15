import { useState } from "react";
import { useRouter } from "next/router";
const Filter = () => {
  const [day, setDay] = useState(`-`);
  const [month, setMonth] = useState(`-`);

  const router = useRouter();
  const formSubmitHandler = () => {
    router.push({pathname:`events/`,query:{month, day}});
  };

  const selectHandler = (e) => {
    e.target.name === "day" && setDay(() => e.target.value);
    e.target.name === "month" && setMonth(() => e.target.value);
  };

  return (
    <form action="" onSubmit={formSubmitHandler}>
      <select name="day" onChange={selectHandler}>
        <option value="12">12</option>
        <option value="120">120</option>
        <option value="120000">12000</option>
      </select>

      <select name="month" onChange={selectHandler}>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
      </select>

      <input type="submit" value="Find!" />
    </form>
  );
};

export default Filter;
