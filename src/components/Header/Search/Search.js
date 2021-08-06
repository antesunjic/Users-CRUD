import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { SearchContext } from "../../../context/SearchContext";

import Input from "../../UI/Input/Input";

const Search = () => {
  const users = useSelector((state) => state.usersReducer.users);
  const { enteredFilter, setFilteredUsers, setEnteredFilter } =
    useContext(SearchContext);

  useEffect(() => {
    if (enteredFilter.length > 0) {
      const filteredUsers = Object.keys(users)
        .filter((user) =>
          users[user].name.toLowerCase().includes(enteredFilter.toLowerCase())
        )
        .reduce((acc, cur) => {
          return { ...acc, [cur]: users[cur] };
        }, {});
      setFilteredUsers(filteredUsers);
    } else {
      setFilteredUsers([]);
    }
  }, [enteredFilter, users, setFilteredUsers]);

  return (
    <div>
      <Input
        type="text"
        value={enteredFilter}
        onChange={(e) => setEnteredFilter(e.target.value)}
      />
    </div>
  );
};

export default Search;
