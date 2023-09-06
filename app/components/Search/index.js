// components/Search.js

import React from "react";

const Search = ({ searchTerm, onSearchChange }) => {
  //   const handleSearch = (e) => {
  //     e.preventDefault();
  //     const searchTerm = e.target.elements.searchInput.value;
  //     // Perform your search logic here with the searchTerm
  //   };
  return (
    <div className="flex justify-center">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      {/* <input
        type="text"
        placeholder="Search cards..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      /> */}

      <div className="relative w-full md:w-2/4 ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500  dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          name="searchInput"
          className="block w-full p-5 pl-11 text-sm text-gray-900 border border-gray-300 rounded-full bg-white-100 shadow focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Chatgpt, midjou..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
