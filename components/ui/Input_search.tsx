import React from "react";
import { FiSearch } from "react-icons/fi";
function Input_search() {
  return (
    <section className="px-4 py-2">
      <div className=" border-b rounded-[8px]  border-[#2a2a2a]">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B6B6B6]" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-3 py-4 text-sm rounded bg-[#1a1f24] text-white outline-none placeholder-gray-[#B6B6B6]"
          />
        </div>
      </div>
    </section>
  );
}

export default Input_search;
