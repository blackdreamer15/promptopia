"use client";

import { useState, useEffect } from "react";

const Feed = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    e.preventDefault();
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input"
        />
      </form>
    </section>
  );
};

export default Feed;
