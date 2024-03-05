import dayjs from "dayjs";
import React, { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import { dataEvent } from "../../data/dataEvent";
export default function Day({ day, index }) {
  const [eventShow, setEventShow] = useState(false);
  const handleMouseEnter = () => {
    setEventShow(true);
  };

  const today = dayjs();
  const { monthIndex } = useContext(GlobalContext);

  const currDate = day.format("YYYY-MM-DD");

  const eventIsCurrDate = dataEvent.filter((event) => {
    const eventStartDate = event.start.substring(0, 10);
    return eventStartDate === currDate;
  });

  const getBackgroundColor = (importance) =>
    ({
      1: "#FFE4C8",
      2: "#0F4C81",
      3: "#5684AE",
    }[importance]);

  return (
    <div
      className={` cursor-pointer border border-dotted py-3 select-none border-[#eee] h-full ${
        monthIndex !== day.month() && "text-[#C7C7C7]"
      } ${eventIsCurrDate.length > 0 ? "bg-[#E3F6ED]" : ""}`}
      onMouseEnter={handleMouseEnter}
    >
      <span
        className={`${
          day.$D === today.$D &&
          day.$M === today.$M &&
          "bg-[#176AA2] py-[2px] px-2 text-center rounded-full text-white"
        } `}
      >
        {day.$D}
      </span>
      {eventShow && eventIsCurrDate.length > 0 && (
        <>
          {eventIsCurrDate.slice(0, 2).map((e, i) => (
            <div
              key={i}
              className="relative mt-1 overflow-hidden rounded-sm"
              style={{ backgroundColor: e.color }}
              onClick={() => {}}
            >
              <a href={`/${e.title}`}>
                <span className="text-[10px]">
                  {e.title.length > 20 ? `${e.title.slice(0, 10)}...` : e.title}
                </span>
                <span
                  className="absolute top-0 left-0 w-1 h-full "
                  style={{ backgroundColor: getBackgroundColor(e.importance) }}
                ></span>
              </a>
            </div>
          ))}
          {eventIsCurrDate.length > 2 && (
            <div className="text-[10px] text-left text-[#5684AE] p-[2px]">
              {eventIsCurrDate.length - 2} more
            </div>
          )}
        </>
      )}
    </div>
  );
}
