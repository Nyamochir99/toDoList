"use client";

import { Completed } from "@/components/Completed";
import { Container } from "@/components/Container";
import { ContainerWithAdd } from "@/components/ContainerWithAdd";
import { Footer } from "@/components/Footer";
import { Tabs } from "@/components/Tabs";
import { TaskContainer } from "@/components/TaskContainer";
import { TasksNoTask } from "@/components/TasksNoTask";
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
          <ContainerWithAdd
            setInputTask={setInputTask}
            inputTask={inputTask}
            handleClick={handleClick}
          />
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
          <TasksNoTask
            tasks={tasks}
            setTasks={setTasks}
            filteredTasks={filteredTasks}
          />
        </div>
        <Completed
          completedTasks={completedTasks}
          tasks={tasks}
          deleteCompleted={deleteCompleted}
        />
        <Footer />
      </div>
    </div>
  );
}
