// ProjectList component
import React from "react";

const ProjectCard = () => {
  // Assuming you have some data for projects
  const projects = [
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
    { id: 3, name: "Project 3" },
    // Add more projects as needed
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {projects.map((project) => (
        <div key={project.id} className="border border-gray-300 p-4">
          <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
          {/* Add more project details as needed */}
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
