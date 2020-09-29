import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import TextField from "@material-ui/core/TextField";
import { formatRupiah } from "./FormatRupiah";

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
  jumlah: {
    width: "20%",
    marginTop: 10,
  },
});

export default function Items({
  data,
  bayarDispatch,
  nama,
  harga,
  resetJumlah,
  cetak,
  cetakAll,
  total,
  setJumlahDua,
  jumlahDua,
}) {
  const classes = useStyles();

  const [jumlah, setJumlah] = React.useState(0);

  React.useEffect(() => {
    setJumlah(0);
    setJumlahDua(0);
  }, [resetJumlah]);

  React.useEffect(() => {
    if (jumlah > 0) {
      bayarDispatch({
        type: "cetak",
        cetakObj: {
          nama,
          jumlah,
          harga,
          totHarga: total,
        },
      });
    }
  }, [cetak]);

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
              Rp {formatRupiah(data.harga)} / pcs
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              setJumlah((prevCount) => parseInt(prevCount, 10) + 1);
              setJumlahDua((prevCount) => parseInt(prevCount, 10) + 1);
              bayarDispatch({
                type: "tambah",
                value: harga,
              });
            }}
          >
            Tambah
          </Button>
          <Link href="https://wa.me/621388110474">
            <a>
              <Button size="small" color="primary">
                BELI
              </Button>
            </a>
          </Link>
        </CardActions>
      </Card>
    </>
  );
}
