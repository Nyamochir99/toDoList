"use client";

import { Container } from "@/components/Container";
import { Tabs } from "@/components/Tabs";
import { TaskContainer } from "@/components/TaskContainer";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const buttons = [
    { button: "All", isActive: true },
    { button: "Active", isActive: false },
    { button: "Completed", isActive: false },
  ];
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState({
    taskName: "",
    isCompleted: false,
  });
  const handleClick = () => {
    setTasks([inputTask, ...tasks]);
  };
  return (
    <div className="w-screen flex items-start justify-center bg-white pt-30 pb-30">
      <div className="flex flex-col w-94.25 px-4 py-6 items-center rounded-md bg-white shadow-[0_0_12px_0_rgba(0,0,0,0.16)]">
        <div className="flex flex-col gap-5">
          <p className="h-7 text-xl text-center font-semibold text-black">
            To-Do list
          </p>
          <div className="flex gap-1.5 h-10 w-full">
            <Container setInputTask={setInputTask} />
            <div
              onClick={handleClick}
              className="flex h-full w-14.75 py-2 px-4 items-center rounded-md bg-[#3C82F6] text-[#F9F9F9] text-[14px] font-normal cursor-pointer"
            >
              Add
            </div>
          </div>
          <div className="flex justify-start gap-1.5 ">
            {buttons.map((element, key) => {
              return (
                <Tabs
                  key={key}
                  button={element.button}
                  isActive={element.isActive}
                />
              );
            })}
          </div>
          <div className="flex flex-col gap-5">
            {tasks.map((task, index) => {
              return (
                <TaskContainer
                  taskName={task.taskName}
                  isCompleted={task.isCompleted}
                  key={index}
                  index={index}
                  allTasks={tasks}
                  updateTasks={setTasks}
                />
              );
            })}
          </div>
        </div>
        <div className="flex mt-10 gap-1 items-center justify-center">
          <p className="text-[12px] font-normal text-[#6B7280]">Powered by</p>
          <p className="text-[12px] font-normal text-[#3B73ED]">
            Pinecone academy
          </p>
        </div>
      </div>
    </div>
  );
}
