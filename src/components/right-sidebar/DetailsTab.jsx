import React from "react";
import { RiTeamFill } from "react-icons/ri";
import DetailsAccordion from "./DetailsAccordian";

const DetailsTab = () => {
  return (
    <div className="max-w-full px-4 py-2">
      <div className="flex items-center justify-between font-semibold gap-4 px-4 py-2 w-4/5">
        <p className="text-gray-500">Assignee</p>
        <span className="flex items-center gap-2 ">
          <img
            src={`https://i.pravatar.cc/150?img=1`}
            alt={message.id}
            className="w-4 h-4 rounded-full"
          />
          Bryne ben
        </span>
      </div>
      <div className="flex items-center justify-between font-semibold gap-4 px-4 py-2 w-4/5">
        <p className="text-gray-500">Team</p>
        <span className="flex items-center gap-2 ">
          <RiTeamFill />
          Unassigned
        </span>
      </div>
      {/* accordian */}
      <DetailsAccordion />
    </div>
  );
};

export default DetailsTab;
