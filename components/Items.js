import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
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

export const items = [
  {
    title: "Tama Superstar Classic CL72RS PGJP 7pcs Drum Set",
    harga: 10000,
    gambar: "/image/drum.png",
  },
  {
    title: "Clifton Precision Bass Guitar",
    harga: 3000780,
    gambar: "/image/bass.jpeg",
  },
  {
    title: "Hardman 4'8 Petite Grand Piano",
    harga: 10.0,
    gambar: "/image/piano.png",
  },
  {
    title: "Gitar Elektrik Gibson Les Paul Custom Black",
    harga: 10000,
    gambar: "/image/gitar.jpg",
  },
];

export default function MediaCard() {
  const classes = useStyles();
  const initialValue = 0;
  const [tambah, setTambah] = useState(initialValue);

  return (
    <>
      <Grid container justify="flex-end">
        <Badge
          badgeContent={tambah}
          color="secondary"
          className={classes.notif}
        >
          <Modal />
        </Badge>
      </Grid>
      <span onClick={() => setTambah(tambah + 1)}>tambah</span>
      <Grid container spacing={2} className={classes.container}>
        {items.map((e, index) => (
          <Grid item xs={6} key={index}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={e.gambar}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography variant="h6" component="h6">
                    {e.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Rp {e.harga} / pcs
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => setTambah((prevState) => prevState + 1)}
                >
                  Tambah
                </Button>
                <Button size="small" color="primary">
                  BELI
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
