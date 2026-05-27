"use client";

import { useState, ChangeEvent } from "react";
import { Search } from "lucide-react";
import "../app/styles/SearchBar.css";
import React from 'react';

interface SearchBarProps {
  placeholder?: string;
  width?: string;
  onSearch?: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search here...",
  width = "320px",
  onSearch = null,
}) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setSearchValue(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div
      className="searchbar"
      style={{ width }}
    >
      <div className="searchbar-icon">
        <Search size={18} />
      </div>

      <input
        type="text"
        placeholder={placeholder}
        className="searchbar-input"
        value={searchValue}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
