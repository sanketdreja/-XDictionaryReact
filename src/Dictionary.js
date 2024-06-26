import React, { useState } from "react";

function Dictionary() {
  // Initialize the dictionary state with the provided array
  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  // Initialize state for search term and search result
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("");

  // Handle search term input change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const result = dictionary.find(
      (entry) => entry.word.toLowerCase() === lowerCaseSearchTerm
    );

    if (result) {
      setSearchResult(result.meaning);
    } else {
      setSearchResult("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      {/* Search bar */}
      <label htmlFor="search-term">Search for a word:</label>
      <input
        type="text"
        id="search-term"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Type a word here..."
      />
      {/* Search button */}
      <button onClick={handleSearch}>Search</button>

      {/* Display search result */}
      <div>
        <h2>Definition:</h2>
        {searchResult ? (
          <p> {searchResult}</p>
        ) : (
          <p>Start by typing a word and clicking 'Search'</p>
        )}
      </div>
    </div>
  );
}

export default Dictionary;
