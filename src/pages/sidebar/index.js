import React from "react";
import "./index.css";
import { MdDashboardCustomize, MdAssignmentTurnedIn, MdPending } from "react-icons/md";
import { RiInboxUnarchiveFill } from "react-icons/ri";
import { FaUserSecret, FaHistory } from "react-icons/fa";
import { SiDavinciresolve } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const tabs = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <MdDashboardCustomize style={{ fontSize: "20px" }} />,
    },
    {
      name: "Inbox",
      path: "/inbox",
      icon: <RiInboxUnarchiveFill style={{ fontSize: "20px" }} />,
    },
    {
      name: "Users",
      path: "/users",
      icon: <FaUserSecret  style={{ fontSize: "20px" }} />,
    },
    {
      name: "Assigned",
      path: "/assigned",
      icon: <MdAssignmentTurnedIn  style={{ fontSize: "20px" }} />,
    },
    {
      name: "Resolved",
      path: "/resolved",
      icon: <SiDavinciresolve  style={{ fontSize: "20px" }} />,
    },
    {
      name: "Pending",
      path: "/pending",
      icon: <MdPending  style={{ fontSize: "20px" }} />,
    },
    {
      name: "Purchase History",
      path: "/purchase",
      icon: <FaHistory  style={{ fontSize: "20px" }} />,
    },
  ];

  return (
    <div className="flex flex-col sidebar shadow-lg">
      {/* Sidebar Menu */}
      <ul className="space-y-2 py-28 px-4 flex-grow">
        {tabs.map((tab, index) => (
          <li key={index} className="group font-bold text-[15px] text-center">
            <Link
              to={tab.path}
              className={`flex items-center p-2 text-gray-600 transition-colors rounded-lg no-underline ${
                location.pathname === tab.path
                  ? "bg-blue-500 text-white"
                  : ""
              }`}
            >
              <span className="">{tab.icon}</span>
              <span className="mx-2">{tab.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
