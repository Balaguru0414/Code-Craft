// Dashboard component
import React from "react";
import Sidebar from "./Sidebar";
import ProjectCard from "./ProjectCard";
import SearchBar from "./SearchBar";
import Navbar from "./NavBar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <div className="lg:w-3/4 p-4">
          <SearchBar />
          <ProjectCard />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
