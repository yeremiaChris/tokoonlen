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
import { FormatBold } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
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

export default function TransitionsModal({ cetak, card }) {
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
      <NotificationsIcon
        color="primary"
        fontSize="large"
        onClick={() => {
          handleOpen();
          cetak();
        }}
      />

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
          <TableContainer component={Paper} className={classesDua.paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                <>
                  <React.Fragment>
                    <TableRow className={classesDua.root}>
                      <TableCell>
                        <IconButton
                          aria-label="expand row"
                          size="small"
                          onClick={() => setOpenDua(!openDua)}
                        >
                          {openDua ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )}
                        </IconButton>
                      </TableCell>
                      <TableCell>Keranjang</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        style={{ paddingBottom: 0, paddingTop: 0 }}
                        colSpan={6}
                      >
                        <Collapse in={openDua} timeout="auto" unmountOnExit>
                          <Box margin={1}>
                            <Table size="small" aria-label="purchases">
                              <TableHead>
                                <TableRow>
                                  <TableCell>Nama</TableCell>
                                  <TableCell>Kuantitas</TableCell>
                                  <TableCell>Harga</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {card.barang.map((e, i) => (
                                  <>
                                    <TableRow key={i}>
                                      <TableCell component="th" scope="row">
                                        {e.nama}
                                      </TableCell>
                                      <TableCell>{e.jumlah}</TableCell>
                                      <TableCell>
                                        {formatRupiah(e.harga)}
                                      </TableCell>
                                    </TableRow>

                                    <TableRow>
                                      <TableCell
                                        component="th"
                                        scope="row"
                                      ></TableCell>
                                      <TableCell>Total :</TableCell>
                                      <TableCell>
                                        {formatRupiah(e.totHarga)}
                                      </TableCell>
                                    </TableRow>
                                  </>
                                ))}
                              </TableBody>
                            </Table>
                          </Box>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                </>
              </TableBody>
            </Table>
            {/* <h3 id="transition-modal-description">Item {props.title}</h3> */}
          </TableContainer>
        </Fade>
      </Modal>
    </div>
  );
}
