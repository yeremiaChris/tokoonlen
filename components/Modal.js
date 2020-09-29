import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { formatRupiah } from "./FormatRupiah";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Link from "next/link";
import RestoreIcon from "@material-ui/icons/Restore";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "90%",
  },
}));

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

export default function TransitionsModal({
  cetak,
  card,
  reset,
  resetJumlahDua,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [openDua, setOpenDua] = React.useState(false);
  const classesDua = useRowStyles();

  return (
    <div>
      <IconButton color="secondary" aria-label="add to shopping cart">
        <AddShoppingCartIcon
          onClick={() => {
            handleOpen();
            cetak();
          }}
        />
      </IconButton>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <Grid container>
              <Grid item xs={4}>
                <p>Nama Barang</p>
              </Grid>
              <Grid item xs={4} align="center">
                <p>Kuantitas</p>
              </Grid>
              <Grid item xs={4}>
                <p>Harga</p>
              </Grid>
            </Grid>
            {card.barang.map((e, i) => (
              <>
                <Grid container>
                  <Grid item xs={4}>
                    <p>{e.nama}</p>
                  </Grid>
                  <Grid item xs={4} align="center">
                    <p>{e.jumlah}</p>
                  </Grid>
                  <Grid item xs={4}>
                    <p>{e.harga}</p>
                  </Grid>
                </Grid>
                keren
              </>
            ))}
            <Grid container>
              <Grid item xs={4}></Grid>
              <Grid item xs={4} align="center">
                <Button
                  variant="contained"
                  color="action"
                  size="small"
                  className={classes.button}
                  startIcon={<RestoreIcon />}
                  onClick={() => {
                    reset({ type: "reset" });
                    resetJumlahDua();
                  }}
                >
                  reset
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Link href={`https://wa.me/6281388110474/`}>
                  <a>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      className={classes.button}
                      startIcon={<SaveIcon />}
                    >
                      Save
                    </Button>
                  </a>
                </Link>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
