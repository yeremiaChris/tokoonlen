import React from "react";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  container: {
    width: "95%",
    margin: "auto",
  },
  button: {
    backgroundColor: "pink",
  },
  notif: {
    margin: 20,
  },
});
export default function Notif({ tambah }) {
  const classes = useStyles();

  return (
    <>
      <Grid item={2}>
        <Badge
          badgeContent={tambah}
          color="secondary"
          className={classes.notif}
        >
          <NotificationsIcon />
        </Badge>
      </Grid>
    </>
  );
}
