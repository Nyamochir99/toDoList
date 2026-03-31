import React from "react";

export const TaskContainer = ({
  taskName,
  isCompleted,
  id,
  allTasks,
  updateTasks,
  isImportant,
}) => {
  const handleChecked = () => {
    updateTasks(
      allTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  };
  const handleClick = () => {
    if (window.confirm("Are you sure delete this task?") === true) {
      const filteredTasks = allTasks.filter((task) => task.id !== id);
      updateTasks(filteredTasks);
    } else {
      return;
    }
  };
  const handleImportant = () => {
    const tasksAfterUpdate = allTasks.map((task) =>
      task.id === id ? { ...task, isImportant: !task.isImportant } : task,
    );
    updateTasks(tasksAfterUpdate);
    handleSort(tasksAfterUpdate);
  };
  const handleSort = (tasks) => {
    updateTasks(tasks.sort((a, b) => b.isImportant - a.isImportant));
  };
  return (
    <div className="w-86.25 h-15.5 bg-[#F9FAFB] rounded-md flex p-4 items-center justify-between transition duration-150 group hover:bg-[#F3F4F6]">
      <div className="flex items-center gap-2.5 absolute">
        <input
          className="w-5 h-5 cursor-pointer peer"
          type="checkbox"
          id={id}
          name="isDone"
          checked={isCompleted}
          onChange={() => handleChecked(id)}
        />
        <label
          className="text-black text-[14px] font-normal peer-checked:line-through peer-checked:text-gray-600 transition delay-150"
          htmlFor="toDo"
        >
          {taskName}
        </label>
      </div>
      <div
        className="relative left-53 cursor-pointer"
        onClick={handleImportant}
      >
        {isImportant ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#ef4444"
          >
            <path d="m480-146.93-44.15-39.69q-99.46-90.23-164.5-155.07-65.04-64.85-103.08-115.43-38.04-50.57-53.15-92.27Q100-591.08 100-634q0-85.15 57.42-142.58Q214.85-834 300-834q52.38 0 99 24.5t81 70.27q34.38-45.77 81-70.27 46.62-24.5 99-24.5 85.15 0 142.58 57.42Q860-719.15 860-634q0 42.92-15.12 84.61-15.11 41.7-53.15 92.27-38.04 50.58-102.89 115.43Q624-276.85 524.15-186.62L480-146.93Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#ef4444"
          >
            <path d="m480-146.93-44.15-39.69q-99.46-90.23-164.5-155.07-65.04-64.85-103.08-115.43-38.04-50.57-53.15-92.27Q100-591.08 100-634q0-85.15 57.42-142.58Q214.85-834 300-834q52.38 0 99 24.5t81 70.27q34.38-45.77 81-70.27 46.62-24.5 99-24.5 85.15 0 142.58 57.42Q860-719.15 860-634q0 42.92-15.12 84.61-15.11 41.7-53.15 92.27-38.04 50.58-102.89 115.43Q624-276.85 524.15-186.62L480-146.93Zm0-81.07q96-86.38 158-148.08 62-61.69 98-107.19t50-80.81q14-35.3 14-69.92 0-60-40-100t-100-40q-47.38 0-87.58 26.88-40.19 26.89-63.65 74.81h-57.54q-23.85-48.31-63.85-75Q347.38-774 300-774q-59.62 0-99.81 40Q160-694 160-634q0 34.62 14 69.92 14 35.31 50 80.81t98 107q62 61.5 158 148.27Zm0-273Z" />
          </svg>
        )}
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
