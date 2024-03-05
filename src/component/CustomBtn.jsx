import React from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
export default function CustomBtn({ type, onClick }) {
  return (
    <div
      onClick={() => onClick()}
      className="text-xl text-[#5684AE] cursor-pointer hover:scale-110"
    >
      {type === "next" ? <GrFormNext /> : <GrFormPrevious />}
    </div>
  );
}
