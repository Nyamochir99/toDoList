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
  const handleClick = () => {
    if (window.confirm("Are you sure?") === true) {
      const filteredTasks = allTasks.filter((_, i) => i !== index);
      updateTasks(filteredTasks);
    } else {
      return;
    }
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
      <div
        onClick={handleClick}
        className="hidden group-hover:flex transition duration-150 items-center justify-center py-1.5 px-3 rounded-md text-[#EF4444] text-[14px] font-normal cursor-pointer hover:bg-[#FEF2F2]"
      >
        Delete
      </div>
    </div>
  );
};
