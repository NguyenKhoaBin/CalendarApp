import React, { useContext } from "react";
import { BsCameraVideo } from "react-icons/bs";
import { dataEvent } from "../../../data/dataEvent.js";
import dayjs from "dayjs";
import { FaUserCircle } from "react-icons/fa";
import GlobalContext from "../../../context/GlobalContext.js";
export default function Event() {
  const { daySelect } = useContext(GlobalContext);
  const currDate = daySelect.format("YYYY-MM-DD");
  const today = dayjs().format("YYYY-MM-DD");

  const eventIsCurrDate = dataEvent.filter((event) => {
    const eventStartDate = event.start.substring(0, 10);
    return eventStartDate === currDate;
  });

  console.log(daySelect.format("YYYY-MM-DD"));

  const formatTime = (timeString) => {
    const time = dayjs(timeString);
    const formattedTime = time.format("h:mm A");
    return `${formattedTime} `;
  };

  const getBackgroundColor = (importance) =>
    ({
      1: "#FFE4C8",
      2: "#0F4C81",
      3: "#5684AE",
    }[importance]);

  return (
    <div className="h-[315px] overflow-y-scroll no-scrollbar ">
      <span className="text-[#9993A3] font-[500] text-lg  ">
        {today === currDate ? "Today " : ""}
        {daySelect.format("DD MMM")}
      </span>
      {eventIsCurrDate.length <= 0 && (
        <div className="font-[500] text-xl py-5 text-[#F9BE81]">
          You don't have events for today
        </div>
      )}
      {eventIsCurrDate &&
        eventIsCurrDate.length > 0 &&
        eventIsCurrDate.map((e, i) => (
          <div
            key={e.id}
            className={`mt-1 cursor-pointer hover:bg-opacity-75 transition-all px-5 py-3 rounded-md overflow-hidden min-h-[100px] flex flex-col gap-2 relative`}
            style={{ backgroundColor: e.color }}
          >
            <span
              className="absolute top-0 left-0 w-2 h-full "
              style={{ backgroundColor: getBackgroundColor(e.importance) }}
            ></span>
            <div className="flex flex-1 w-full ">
              <div className="flex-1 space-y-1 text-sm">
                <p className="text-[#0F4C81] font-[500] text-[15px]">
                  {e.title}
                </p>
                <p className="text-[#15181c]">
                  {formatTime(e.start)} - {formatTime(e.end)} AM GMT +8
                </p>
              </div>
              {e?.type === "Webinar" ? (
                <></>
              ) : (
                <span className="bg-[#5683AE] text-white flex h-[40px] w-[40px] rounded-full items-center justify-center text-lg cursor-pointer hover:bg-opacity-75 transition-all">
                  <BsCameraVideo />
                </span>
              )}
            </div>
            {e.avt && (
              <span className="flex items-center gap-2">
                {/* <img
                  src={e.avt}
                  alt="avt"
                  className="h-[35px] w-[35px] rounded-full"
                /> */}
                <span className="h-[30px] flex items-center justify-center w-[30px] rounded-full text-2xl hover:scale-105 transition-all">
                  <FaUserCircle />
                </span>
                <a
                  href="https://www.facebook.com/nguyen.bin.796569"
                  className="underline text-[#5684AE]"
                >
                  View Client Profile
                </a>
              </span>
            )}
          </div>
        ))}
    </div>
  );
}
