import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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

export default function Items({ data, tambahBarang }) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={data.gambar}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography variant="h6" component="h6">
              {data.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Rp {data.harga} / pcs
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={tambahBarang}>
            Tambah
          </Button>
          <Button size="small" color="primary">
            BELI
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
