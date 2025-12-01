"use client";
import { ChangeEvent } from "react";
import { SearchProps } from "../../types/allTypes";

function Search({ onSearch }: SearchProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
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
