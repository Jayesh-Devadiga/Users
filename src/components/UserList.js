import { Typography } from "@material-ui/core";
import React from "react";
import User from "./User";

const UserList = ({ usersList }) => {
  return (
    <div>
      <Typography style={{ textAlign: "center", marginTop: "10px", marginBottom: "10px" }}>List of Users</Typography>
      {usersList.map((user) => (
        <User key={`${user.name.first}_${user.name.last}_${Math.floor(Math.random() * 10000) + 1}`} user={user} />
      ))}
    </div>
  );
};

export default UserList;
