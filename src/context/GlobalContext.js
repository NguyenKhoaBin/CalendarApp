import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  daySelect: 0,
  setDaySelect: (index) => {},
});

export default GlobalContext;
