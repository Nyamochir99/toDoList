import React from "react";
import { Container } from "./Container";

export const ContainerWithAdd = ({ setInputTask, inputTask, handleClick }) => {
  return (
    <div className="flex gap-1.5 h-10 w-full">
      <Container
        setInputTask={setInputTask}
        inputTask={inputTask}
        kbEnter={handleClick}
      />
      <div
        onClick={handleClick}
        className="flex h-full w-14.75 py-2 px-4 items-center rounded-md bg-[#3C82F6] text-[#F9F9F9] text-[14px] font-normal cursor-pointer"
      >
        Add
      </div>
    </div>
  );
};
