// SearchBar component
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className="relative mb-4">
      <input
        type="text"
        className="w-full border border-gray-300 rounded p-2 pl-10"
        placeholder="Search projects..."
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar;
