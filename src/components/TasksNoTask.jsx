import React from "react";
import { TaskContainer } from "./TaskContainer";

export const TasksNoTask = ({ tasks, setTasks, filteredTasks }) => {
  return (
    <div className="flex flex-col gap-5">
      {tasks.length === 0 ? (
        <div className="h-15.5 flex justify-center items-center text-[#6B7280] text-[14px] font-normal">
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
        </>
      )}
    </div>
  );
};
