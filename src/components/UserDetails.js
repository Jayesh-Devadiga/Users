import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  avatar: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  details: {
    textAlign: "center",
    color: "#777",
  },
  typography: {
    marginTop: 20,
    color: "#555",
    fontWeight: "bold",
  },
}));

const UserDetails = ({ user }) => {
  const classes = useStyles();
  const { avatar, details, typography } = classes;
  const { name, email, location, dob, phone, cell, picture, login } = user;
  return (
    <Grid container direction="column" className={details} alignItems="center">
      <Grid item>
        <Avatar className={avatar} src={picture.large} />
      </Grid>
      <Grid item>
        <Typography className={typography} variant="h6">
          Account Details
        </Typography>
        <Typography variant="body2">{`${name.first} ${name.last}`}</Typography>
        <Typography variant="body2">{login.username}</Typography>
        <Typography variant="body2">{email}</Typography>
      </Grid>
      <Grid item>
        <Typography className={typography} variant="h6">
          Address
        </Typography>
        <Typography variant="body2">City: {location.city}</Typography>
        <Typography variant="body2">Country: {location.country}</Typography>
        <Typography variant="body2">State: {location.state}</Typography>
      </Grid>
      <Grid item>
        <Typography className={typography} variant="h6">
          Personal Details
        </Typography>
        <Typography variant="body2">Age: {dob.age}</Typography>
        <Typography variant="body2">Mobile: {cell} </Typography>
        <Typography variant="body2">Phone: {phone}</Typography>
      </Grid>
    </Grid>
  );
};

export default UserDetails;
