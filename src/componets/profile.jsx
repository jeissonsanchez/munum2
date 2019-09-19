import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles({
  profile: {
    display: "flex",
    flexFlow: "row nowrap"
  },
  textProfile: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "flex-end",
    justifyContent: "center",
    color: "black"
  },
  textProfileName: {},
  textProfileRol: {
    color: "#4A4A4A"
  },
  avatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: "#FEB52A"
  }
});

export default function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.profile}>
      <div className={classes.textProfile}>
        <Typography variant="body2" className={classes.textProfileName}>
          {"Jeisson Fabián Sánchez Gutiérrez".substr(0, 35)}
        </Typography>
        <Typography variant="body" className={classes.textProfileRol}>
          Presidente
        </Typography>
      </div>
      <Avatar className={classes.avatar}>J</Avatar>
    </div>
  );
}

{
  /* <div className="profileContainer">
      <Grid container justify="center" alignItems="center">

      <Avatar className={classes.orangeAvatar}>N</Avatar>
      <Avatar className={classes.purpleAvatar}>OP</Avatar>
    </Grid>
<div className="profile">

  <Typography
    variant="overline"
    display="block"
    color="primary"
    align="right"
    gutterBottom
  >
    Sanchez Gutierrez
  </Typography>
  <Typography
    variant="caption"
    display="block"
    color="primary"
    align="right"
    gutterBottom
  >
    Presidente
  </Typography>
  <div className="profileName" />
  <div className="profileRoll" />
</div>
<div className="profileImage" />
</div> */
}
