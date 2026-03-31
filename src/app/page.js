"use client";

import { Container } from "@/components/Container";
import { Tabs } from "@/components/Tabs";
import { TaskContainer } from "@/components/TaskContainer";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const buttons = [
    { button: "All" },
    { button: "Important" },
    { button: "Active" },
    { button: "Completed" },
  ];
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState("");
  const [filter, setFilter] = useState("All");
  const handleClick = () => {
    let nospace = inputTask.trim(" ");
    if (nospace.length === 0) {
      alert("Task name cannot be empty. Please enter a valid task.");
      setInputTask("");
      return;
    }
    const updatedTasks = [
      {
        taskName: inputTask,
        isCompleted: false,
        isImportant: false,
        id: Date.now(),
      },
      ...tasks,
    ];
    setInputTask("");
    const sortedTasks = [...updatedTasks].sort(
      (a, b) => b.isImportant - a.isImportant,
    );
    setTasks(sortedTasks);
  };

  const handleTabs = (active) => {
    setFilter(active);
  };
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.isCompleted;
    if (filter === "Important") return task.isImportant;
    if (filter === "Completed") return task.isCompleted;
    return true;
  });
  console.log(tasks);
  const completedTasks = tasks.filter((task) => {
    return task.isCompleted === true;
  });
  const deleteCompleted = () => {
    if (
      window.confirm("Are you sure you want to delete all completed tasks?") ===
      true
    ) {
      const activeTasks = tasks.filter((task) => task.isCompleted === false);
      setTasks(activeTasks);
    } else {
      return;
    }
  };
  return (
    <div className="w-screen flex items-start justify-center bg-white pt-30 pb-30">
      <div className="flex flex-col w-94.25 px-4 py-6 items-center rounded-md bg-white shadow-[0_0_12px_0_rgba(0,0,0,0.16)]">
        <div className="flex flex-col gap-5">
          <p className="h-7 text-xl text-center font-semibold text-black">
            To-Do list
          </p>
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
          <div className="flex justify-start gap-1.5 ">
            {buttons.map((element, key) => {
              return (
                <Tabs
                  handleTabs={handleTabs}
                  filter={filter}
                  key={key}
                  button={element.button}
                />
              );
            })}
          </div>
          <div className="flex flex-col gap-5">
            <>
              {tasks.length === 0 ? (
                <div className="flex justify-center items-center text-[#6B7280] text-[14px] font-normal mt-5">
                  No tasks yet. Add one above!
                </div>
              ) : (
                <>
                  {filteredTasks.map((task, index) => {
                    return (
                      <TaskContainer
                        taskName={task.taskName}
                        isCompleted={task.isCompleted}
                        key={task.id}
                        id={task.id}
                        index={index}
                        allTasks={tasks}
                        updateTasks={setTasks}
                        isImportant={task.isImportant}
                      />
                    );
                  })}
                  <div className="pt-4 flex justify-between border-t border-t-[#e4e4e7]">
                    <div className="text-[14px] text-[#6B7280] font-normal">
                      {`${completedTasks.length} of ${tasks.length} tasks completed`}
                    </div>
                    <div
                      onClick={deleteCompleted}
                      className="text-[14px] text-[#EF4444] font-normal cursor-pointer"
                    >
                      Clear completed
                    </div>
                  </div>
                </>
              )}
            </>
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
