import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Divider } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import logo from "../assets/img/ico/logo.png";
import home from "../assets/img/ico/home.svg";

const drawerWidth = 80;
const itemSize = 80;

const useStyles = makeStyles(props => ({
  root: {
    display: "flex",
    justifyContent: "space-between"
  },
  drawer: {
    width: drawerWidth,
    height: "100%",
    flexShrink: 0,
    "& *": {
      padding: 0
    }
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    justifyContent: "space-between"
  },
  logoMunum: {
    backgroundColor: "black",
  },
  listItem: {
    width: ` ${itemSize}px`,
    height: ` ${itemSize}px`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderLeft: "6px solid transparent",
    // backgroundColor: props => {
    //   console.log(props);
    //   props.propouse === "brand" ? "red" : "blue";
    // },
    "&:hover": {
      backgroundColor: " rgba(254, 182, 42, 0.15)",
      borderLeft: "6px solid #FEB52A"
    }
  },
  listItemIcon: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    "&>img": {
      width: "40%"
    }
  }
}));

export default function PermanentDrawerLeft(  ) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  if (matches === true) {
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="left"
        >
          <List>
            {["munum"].map((text, index) => (
              <ListItem
                className={`${classes.listItem} ${classes.logoMunum}`}
                button
                key={text}
                propouse="brand"
              >
                <ListItemIcon className={classes.listItemIcon}>
                  <img src={logo} alt="My logo" />
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
          <List>
            {["Home", "delegates", "institutions", "staff", "signout"].map(
              (text, index) => (
                <ListItem className={classes.listItem} button key={text}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <img src={home} alt="My logo" />
                  </ListItemIcon>
                </ListItem>
              )
            )}
          </List>
          <List className={classes.socialNetworks}>

            {["instagram", "facebook"].map((text, index) => (
              <ListItem className={classes.listItem} button key={text}>
                <ListItemIcon className={classes.listItemIcon}>
                  <img src={logo} alt="My logo" />
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    );
  } else {
    return null;
  }
}

//comentario
