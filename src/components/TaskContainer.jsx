import React from "react";

export const TaskContainer = ({
  taskName,
  isCompleted,
  index,
  allTasks,
  updateTasks,
}) => {
  const handleChecked = () => {
    const newTasks = [...allTasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    updateTasks(newTasks);
  };
  return (
    <div className="w-86.25 h-15.5 bg-[#F9FAFB] rounded-md flex p-4 items-center justify-between transition duration-150 group hover:bg-[#F3F4F6]">
      <div className="flex items-center gap-2.5 ">
        <input
          className="w-5 h-5 cursor-pointer peer"
          type="checkbox"
          id={`toDo-${index}`}
          name="isDone"
          checked={isCompleted}
          onChange={handleChecked}
        />
        <label
          className="text-black text-[14px] font-normal peer-checked:line-through transition delay-150"
          htmlFor="toDo"
        >
          {taskName}
        </label>
      </div>
      <div className="hidden group-hover:block flex transition duration-150 items-center justify-center py-1.5 px-3 rounded-md bg-[#FEF2F2] text-[#EF4444] text-[14px] font-normal cursor-pointer hover:bg-[#ffe9e9]">
        Delete
      </div>
    </div>
  );
};
