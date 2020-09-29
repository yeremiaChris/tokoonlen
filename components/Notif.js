import React from "react";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "./Modal";

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
export default function Notif({ hitung, cards, cetakAll }) {
  const classes = useStyles();

  return (
    <>
      <Grid item={2}>
        <Badge
          badgeContent={hitung}
          color="secondary"
          className={classes.notif}
        >
          <Modal hitung={hitung} cetak={cetakAll} card={cards} />
        </Badge>
      </Grid>
    </>
  );
}
