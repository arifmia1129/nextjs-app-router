import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const DashboarLayout = ({ children }) => {
  return (
    <div className="flex w-full">
      <div className="flex-1">
        <Sidebar />
      </div>
      <div className="w-full flex-2 justify-start">{children}</div>
    </div>
  );
};

export default DashboarLayout;
