import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [daySelect, setDaySelect] = useState(dayjs());
  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        daySelect,
        setDaySelect,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
