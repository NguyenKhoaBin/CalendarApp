import React from "react";
import Header from "./Header";
import Month from "./Month";
import UpcomingEvents from "./UpcomingEvents";
export default function index() {
  return (
    <div className="h-screen w-[460px] bg-white shadow-md rounded-sm">
      <Header />
      <Month />
      <UpcomingEvents></UpcomingEvents>
    </div>
  );
}
