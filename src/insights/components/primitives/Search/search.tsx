import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
interface SearchProps {
  name: string;
  value?: string;
  placeholder?: string;
  autoFocus?: boolean;
  className?: string;
  onSearch?: (search?: string) => void;
  suggestions?: string[];
  onChange?: (value: string) => void;
}

const suggestionsStyle = {
  "-webkit-line-clamp": "1",
  "display": "-webkit-box",
  "-webkit-box-orient": "vertical"
};

const Search = ({ placeholder, name, value, autoFocus, className, onSearch, suggestions, onChange }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState(value);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleOnSearch = () => {
    onSearch?.(search);
  };

  const handleEmpty = () => {
    setSearch("");
    onSearch?.("");
    onChange?.("");
  };

  const handleOnSelect = (suggestion: string) => {
    setSearch(suggestion);
    onSearch?.(suggestion);
    setShowSuggestions(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <div
      className={`${
        className && className
      } flex bg-white  py-1 w-max px-3 shadow-input border transition focus-within:ring focus-within:border-orange-500 focus-within:ring-orange-100 rounded-lg   ring-light-slate-6 items-center relative`}
    >
      <FaSearch className="text-light-slate-9" fontSize={16} onClick={handleOnSearch}/>
      <input
        className="pl-2 w-full placeholder:text-md  placeholder:  text-md focus:outline-none placeholder:text-light-slate-9"
        autoFocus={autoFocus}
        placeholder={placeholder}
        name={name}
        value={search}
        type="search"
        id={name}
        onChange={handleChange}
        onKeyUp={e => {
          if (e.code === "Enter") {
            handleOnSearch();
          }
        }}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(()=>setShowSuggestions(false), 100)}
      />

      { suggestions && suggestions.length > 0 && showSuggestions && (
        <div className="absolute bg-white w-full shadow-input border border-light-slate-6 rounded-lg cursor-pointer top-full left-0 z-10">
          {suggestions.map((suggestion, index) => (
            <div className="px-4 py-2 my-0.5 h-8 break-all overflow-hidden" style={suggestionsStyle} key={index} onClick={() => handleOnSelect(suggestion)}>
              <span className="text-light-slate-9 text-sm pl-5">{suggestion}</span>
            </div>
          ))}
        </div>
      )}


      { search && <GrClose className="text-light-slate-9" fontSize={16} onClick={handleEmpty}/> }

    </div>
  );
};
export default Search;
