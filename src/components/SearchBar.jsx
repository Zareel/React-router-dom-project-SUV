import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mt-6 px-6">
      <form>
        <input
          type="text"
          placeholder="search here..."
          className="bg-stone-500 text-white border-none outline-none w-[400px] rounded-md px-2 py-2"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default SearchBar;
