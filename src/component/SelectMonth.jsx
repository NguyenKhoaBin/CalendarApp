import React, { useContext, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import GlobalContext from "../context/GlobalContext";

export default function SelectMonth() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  const [selectShow, setSelectShow] = useState(false);
  const handleMouseEnter = () => {
    setSelectShow(true);
  };
  const handleMouseLeave = () => {
    setSelectShow(false);
  };
  return (
    <div className="">
      <div
        className={`text-sm text-white bg-[#5583AD] rounded-xl flex px-[18px] py-[7px] gap-1 items-center flex-end cursor-pointer  hover:bg-opacity-65 relative `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span>Month</span>
        <IoChevronDownOutline />
      </div>
      <div>
        {selectShow && (
          <div className="absolute  bg-[#5583AD] w-[92px] rounded-lg translate-x-[2px] ">
            {Array.from({ length: 12 }, (_, index) => (
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                key={index}
                className="flex items-center justify-center py-1 text-white cursor-pointer hover:bg-[#698fb2]  rounded-lg"
                onClick={() => setMonthIndex(index)}
              >
                <span>{index + 1}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
