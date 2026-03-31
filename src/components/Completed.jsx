import React from "react";

export const Completed = ({ completedTasks, tasks, deleteCompleted }) => {
  return (
    <div className="w-full pt-4 mt-5 flex justify-between border-t border-t-[#e4e4e7]">
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
  );
};
