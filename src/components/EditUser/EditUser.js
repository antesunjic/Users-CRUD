import React, { useEffect, useRef, useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import "./EditUser.css";
import { useDispatch } from "react-redux";
import { editUser } from "../../store/actions/actions";
import axios from "axios";

const EditUser = ({ closeModalHandler, clickedId }) => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [chosenImg, setChosenImg] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://6103057679ed680017482413.mockapi.io/users/${clickedId}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setChosenImg(res.data.avatar);
      });
  }, [clickedId]);

  const submitHandler = (e) => {
    e.preventDefault();
    closeModalHandler();
    dispatch(editUser(clickedId, email, chosenImg, name));
  };

  const discardPhoto = () => {
    setChosenImg(null);
  };

  const imageUploadHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      if (reader.readAsDataURL) {
        reader.readAsDataURL(file);
      } else if (reader.readAsDataurl) {
        reader.readAsDataurl(file);
      }
      reader.onload = () => {
        setChosenImg(reader.result);
      };
    }
  };

  const hiddenFileInput = useRef(null);

  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <Button
            buttonStyle="btn--exit"
            label="X"
            onClick={closeModalHandler}
          />
        </div>
        <h3>Edit profile</h3>
        <div className="modalInputs">
          <Input
            placeholder="Name"
            inputStyle="inputModal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            placeholder="E-mail"
            inputStyle="inputModal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button
            buttonStyle="btn--upload"
            label="Upload photo"
            onClick={handleClick}
          />

          <input
            type="file"
            ref={hiddenFileInput}
            onChange={imageUploadHandler}
            style={{ display: "none" }}
          />

          {chosenImg && (
            <div style={{ textAlign: "right" }}>
              <Button
                buttonStyle="btn--exit"
                label="X"
                onClick={discardPhoto}
              />
              <div>
                <img
                  height="100%"
                  width="100%"
                  src={chosenImg}
                  alt="ChosenImg"
                />
              </div>
            </div>
          )}

          <Button
            label="Submit"
            onClick={(e) => submitHandler(e)}
            disabled={!name || !email || !chosenImg}
            buttonStyle="btn--approve"
            submitType
          />
        </div>
      </form>
    </div>
  );
};

export default EditUser;
