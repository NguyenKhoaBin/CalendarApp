import React, { useContext, useEffect, useState } from "react";
import CustomBtn from "../CustomBtn";
import SelectMonth from "../SelectMonth";
import GlobalContext from "../../context/GlobalContext";
import { getMonth } from "../../untils";
import dayjs from "dayjs";

export default function Header() {
  const [currMonth, setCurrMonth] = useState(getMonth());
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  useEffect(() => {
    setCurrMonth(getMonth(monthIndex));
  }, [monthIndex]);

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
    console.log("next");
  };
  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
    console.log("prev");
  };

  return (
    <div className="select-none">
      <div className="flex items-center justify-center p-5 min-h-[95px] ">
        <div className="flex items-center gap-5 ">
          <CustomBtn type={"prev"} onClick={handlePrevMonth} />
          <span className="text-xl font-[700] text-[#0F4C81]">
            {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
          </span>
          <CustomBtn type={"next"} onClick={handleNextMonth} />
        </div>
      </div>
      <div className="grid px-10 select-none grid-cols-7 py-2 text-center text-[#C7C7C7]">
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>
    </div>
  );
}
