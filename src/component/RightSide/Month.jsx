import React, { useContext, useEffect, useState } from "react";
import { getMonth } from "../../untils";
import Day from "./Day";
import GlobalContext from "../../context/GlobalContext";

export default function Month() {
  const [currMonth, setCurrMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);
  useEffect(() => {
    setCurrMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <div className="grid h-[535px] w-full grid-cols-7 grid-rows-5 text-center">
      {currMonth.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, index) => (
            <Day day={day} key={index} index={index}></Day>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
