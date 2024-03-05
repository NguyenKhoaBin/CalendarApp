import dayjs from "dayjs";
import React from "react";
import Event from "./Event";

export default function index() {
  return (
    <div className="w-full px-6 py-4 select-none ">
      <div className="flex items-center justify-between">
        <span className="text-[#0F4C81]  font-bold text-2xl">
          Upcoming Events
        </span>
        <button className="py-1 rounded-xl cursor-pointer hover:bg-opacity-75 px-3 bg-[#0F4C81] text-white text-sm ">
          View All
        </button>
      </div>

      <Event></Event>
    </div>
  );
}
