// Sidebar component
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-[#111] lg:w-1/4 h-screen p-4">
      <ul>
        <li className="mb-2">Project 1</li>
        <li className="mb-2">Project 2</li>
        <li className="mb-2">Project 3</li>
        {/* Add more items for existing or new Projects */}
      </ul>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 lg:mt-0">
        Create New Project
      </button>
    </div>
  );
};

export default Sidebar;
