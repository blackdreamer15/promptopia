"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

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
          className="search_input peer"
        />
      </form>

      <PromptCardList data={[]} handleTagClick={() => {}} />
    </section>
  );
};

const PromptCardList = ({ data, handleTagClick }) => {
  return <div className="mt-16 prompt_layout"></div>;
};

export default Feed;
