import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Profile from "./profile";

const itemSize = 80;

const useStyles = makeStyles(theme => ({
  appbar: {
    height: itemSize,
    backgroundColor: "transparent",
    width: "calc(100% - 80px)"
  },
  toolbar: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "transparent"
  },
  button: {
    margin: theme.spacing(3)
  }
}));

export default function Navbar() {
  const classes = useStyles();

  const makeBrand = props => {
    var name;
    props.routes.map(prop => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        name = props.rtlActive ? prop.rtlName : prop.name;
      }
      return null;
    });
    return name;
  };

  return (
    <header>
      <CssBaseline />
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Button color="transparent" className={classes.button}>
            Dashboard
          </Button>
          <Profile />
        </Toolbar>
      </AppBar>
    </header>
  );
}
