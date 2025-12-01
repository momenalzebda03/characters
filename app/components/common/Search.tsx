"use client";
import { ChangeEvent } from "react";
import { useCharacters } from "../../store/CharacterContext";

function Search() {
  const { handleSearch } = useCharacters();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  return (
    <input
      type="search"
      placeholder="Search friends..."
      onChange={handleChange}
    />
  );
}

export default Search;
