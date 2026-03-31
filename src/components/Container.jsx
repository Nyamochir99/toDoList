"use client";
import React from "react";

export const Container = ({ setInputTask, inputTask, kbEnter }) => {
  const handleChange = (event) => {
    setInputTask(event.target.value);
  };
  const handlekeydown = (event) => {
    if (event.key === "Enter") {
      kbEnter();
    }
  };
  return (
    <input
      onChange={handleChange}
      onKeyDown={handlekeydown}
      className="flex items-center w-70 h-10 rounded-md border border-[#e4e4e7] text-black text-[14px] font-normal px-4"
      placeholder="Add a new task..."
      name="taskName"
      value={inputTask}
      type="text"
    />
  );
};
