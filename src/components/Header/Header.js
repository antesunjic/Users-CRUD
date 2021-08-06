import React from "react";
import Button from "../UI/Button/Button";
import Search from "./Search/Search";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Users CRUD</h1>
      <div className="searchForm">
        <Search />
        <Button label="Search" buttonStyle="btn--dark" />
      </div>
    </div>
  );
};

export default Header;
