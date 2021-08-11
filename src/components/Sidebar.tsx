import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import InboxIcon from "@material-ui/icons/Inbox";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  blackText: {
    color: "black",
  },
});

function Sidebar() {
  const classes = useStyles();

  const location = useLocation();

  return (
    <React.Fragment>
      <List component="nav" aria-label="search feed subscriptions settings">
        <ListItem
          component={Link}
          to="/search"
          selected={location.pathname.includes("/search")}
          className={classes.blackText}
        >
          <ListItemIcon>
            <SearchIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>
        <ListItem
          component={Link}
          to="/feed"
          selected={location.pathname === "/feed"}
          className={classes.blackText}
        >
          <ListItemIcon>
            <InboxIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Feed" />
        </ListItem>
        <ListItem
          component={Link}
          to="/subscriptions"
          selected={location.pathname === "/subscriptions"}
          className={classes.blackText}
        >
          <ListItemIcon>
            <SubscriptionsIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Subscriptions" />
        </ListItem>
        <ListItem
          component={Link}
          to="/settings"
          selected={location.pathname === "/settings"}
          className={classes.blackText}
        >
          <ListItemIcon>
            <SettingsIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </React.Fragment>
  );
}

export default React.memo(Sidebar);
