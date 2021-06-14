import React from "react";

const Search = ({ onChange, value }) => {
  return (
    <input
      onChange={(e) => onChange(e.target.value)}
      type="text"
      id="text"
      name="search"
      value={value}
      className="py-2 px-2 border-2 rounded-md outline-none focus:outline-none text-sm w-full"
      placeholder="Search by name es: Bitcoin"
    />
  );
};

export default Search;
