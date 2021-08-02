import { Avatar, Card, CardContent, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { showUserDetails } from "../redux/actions";

const useStyles = makeStyles(() => ({
  card: {
    marginBottom: 15,
    cursor: "pointer",
  },
  avatar: {
    width: 50,
    height: 50,
  },
}));

const User = ({ user, showUserDetails }) => {
  const classes = useStyles();
  const { name, picture, email } = user;
  return (
    <Card raised className={classes.card} onClick={() => showUserDetails(user)}>
      <CardContent>
        <Grid container>
          <Grid item xs={1}>
            <Avatar className={classes.avatar} src={picture.large} />
          </Grid>
          <Grid item xs={11}>
            <Typography style={{ color: "#555" }}>{`${name.first} ${name.last}`}</Typography>
            <Typography style={{ color: "#777" }}>{email}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default connect(null, { showUserDetails })(User);
