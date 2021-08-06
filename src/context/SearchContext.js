import React, { createContext, useState } from "react";

export const SearchContext = createContext({});

export const FilteredUsersProvider = ({ children }) => {
  const [filteredUsers, setFilteredUsers] = useState("");

  const [enteredFilter, setEnteredFilter] = useState("");

  return (
    <SearchContext.Provider
      value={{
        filteredUsers,
        setFilteredUsers,
        enteredFilter,
        setEnteredFilter,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
