import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { KeyboardBackspace } from "@material-ui/icons";
import React from "react";

const Titlebar = (props) => {
  const { showingUserDetails, backToHome } = props;
  const renderHeading = () => {
    if (showingUserDetails) {
      return (
        <>
          <IconButton onClick={backToHome}>
            <KeyboardBackspace />
          </IconButton>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            Details
          </Typography>
        </>
      );
    }
    return (
      <Typography variant="h6" style={{ fontWeight: "bold" }}>
        Users
      </Typography>
    );
  };
  return (
    <AppBar position="static" style={{ background: "#2ecc71" }}>
      <Toolbar>{renderHeading()}</Toolbar>
    </AppBar>
  );
};

export default Titlebar;
