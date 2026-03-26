import React from "react";

export const Tabs = ({ handleTabs, button, filter }) => {
  return (
    <>
      {filter === button ? (
        <div
          onClick={() => {
            handleTabs(button);
          }}
          className="h-8 rounded-md flex items-center justify-center px-3 py-1 text-[12px] text-white bg-[#3C82F6] cursor-pointer"
        >
          {button}
        </div>
      ) : (
        <div
          onClick={() => {
            handleTabs(button);
          }}
          className="h-8 rounded-md flex items-center justify-center px-3 py-1 text-[12px] text-[#363636] bg-[#F3F4F6] cursor-pointer"
        >
          {button}
        </div>
      )}
    </>
  );
};
