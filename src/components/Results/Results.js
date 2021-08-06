import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/actions/actions.js";
import UserCard from "./UserCard/UserCard.js";

import "./Results.css";
import EditUser from "../EditUser/EditUser.js";
import Modal from "../UI/Modal/Modal";
import { SearchContext } from "../../context/SearchContext.js";

import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const Results = () => {
  const override = css`
    display: block;
    margin: 50% auto;
    border-color: red;
    position: fixed;
    margin: 0 auto;
    margin-top: 200px;
  `;

  const users = useSelector((state) => state.usersReducer.users);

  const dispatch = useDispatch();

  const { filteredUsers, enteredFilter } = useContext(SearchContext);

  const [editingUser, setEditingUser] = useState(false);

  let [color] = useState("#ffffff");

  const [clickedId, setClickedId] = useState(null);

  const openModalHandler = (id) => {
    setEditingUser(true);
    setClickedId(id);
  };

  const closeModalHandler = () => {
    setEditingUser(false);
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  editingUser
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");

  let allUsers = (
    <ClipLoader loading={true} css={override} color={color} size={150} />
  );

  if (users !== undefined && users !== null) {
    allUsers = Object.keys(users).map((user) => (
      <UserCard
        name={users[user].name}
        id={users[user].id}
        email={users[user].email}
        createdAt={users[user].createdAt}
        avatar={users[user].avatar}
        key={Math.random()}
        openModalHandler={openModalHandler}
      />
    ));
  }

  let filteredUsersList =
    filteredUsers !== undefined &&
    Object.keys(filteredUsers).map((user) => (
      <UserCard
        name={users[user].name}
        id={users[user].id}
        email={users[user].email}
        createdAt={users[user].createdAt}
        avatar={users[user].avatar}
        key={Math.random()}
      />
    ));

  if (Object.keys(filteredUsers).length === 0) {
    filteredUsersList = <p style={{ fontWeight: "bold" }}>No results.</p>;
  }

  return (
    <div className="resultsContent">
      <React.Fragment>
        <Modal show={editingUser} closed={closeModalHandler}>
          <EditUser
            setEditingUser={setEditingUser}
            closeModalHandler={closeModalHandler}
            clickedId={clickedId}
          />
        </Modal>
        {enteredFilter ? filteredUsersList : allUsers}
      </React.Fragment>
    </div>
  );
};

export default Results;
