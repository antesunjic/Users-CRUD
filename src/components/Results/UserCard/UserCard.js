import { useDispatch } from "react-redux";
import { deleteUser } from "../../../store/actions/actions";
import Button from "../../UI/Button/Button";

import "./UserCard.css";

const UserCard = ({ name, email, createdAt, avatar, openModalHandler, id }) => {
  const dispatch = useDispatch();
  const deleteUserHandler = (id) => {
    if (window.confirm(`Do you want to delete the user ${name}?`)) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <table>
      <tbody>
        <tr>
          <th className="small">Avatar</th>
          <th className="middle">Name</th>
          <th className="large">Email</th>
          <th className="middle">Created At</th>
          <th className="small">Actions</th>
        </tr>
        <tr>
          <td className="small">
            <img
              src={avatar}
              alt="AvatarPhoto"
              style={{ height: "60px", width: "60px" }}
            />
          </td>
          <td className="middle">{name}</td>
          <td className="large">{email}</td>
          <td className="middle">
            {new Date(createdAt).toLocaleDateString("en-US")}
          </td>
          <td className="smallButtons">
            <Button
              label="EDIT"
              buttonStyle="btn--edit"
              AA
              onClick={() => openModalHandler(id)}
            />
            <Button
              label="DELETE"
              buttonStyle="btn--danger"
              onClick={() => deleteUserHandler(id)}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserCard;
