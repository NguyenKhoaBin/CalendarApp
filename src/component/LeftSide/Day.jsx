import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

export default function Day({ day, index }) {
  const today = dayjs();
  const { monthIndex, setDaySelect } = useContext(GlobalContext);

  const handleSetDaySelect = () => {
    setDaySelect(day);
  };

  return (
    <div
      className={` py-2 select-none cursor-pointer hover:text-orange-600 transition-all text-sm  h-full ${
        monthIndex !== day.month() && "text-[#C7C7C7]"
      }`}
    >
      <span
        className={`${
          day.$D === today.$D &&
          day.$M === today.$M &&
          "bg-[#176AA2] py-[5px] px-3 text-center rounded-full text-white"
        }`}
        onClick={handleSetDaySelect}
      >
        {day.$D}
      </span>
    </div>
  );
}
