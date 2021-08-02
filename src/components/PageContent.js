import { CssBaseline, LinearProgress } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { backToHome, fetchUsers } from "../redux/actions";
import Titlebar from "./Titlebar";
import UserDetails from "./UserDetails";
import UserList from "./UserList";

const PageContent = (props) => {
  const { users, fetchUsers, backToHome } = props;
  const { usersList, user, showingUserDetails, page } = users;
  useEffect(() => {
    fetchUsers(page);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchUsers(page);
    }, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, [page]);
  return (
    <div style={{ background: "#ecf0f1", height: "100vh" }}>
      <CssBaseline />
      <Titlebar backToHome={backToHome} showingUserDetails={showingUserDetails} />
      {usersList.length === 0 && <LinearProgress />}
      <div style={{ padding: "10px" }}>
        {showingUserDetails ? <UserDetails user={user} /> : <UserList usersList={usersList} />}
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};

export default connect(mapStateToProps, { fetchUsers, backToHome })(PageContent);
