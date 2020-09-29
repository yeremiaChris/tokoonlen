import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Sidebar from "../components/Sidebar";
import Item from "../components/Items";
import Notif from "../components/Notif";
import useSWR from "swr";

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

const initialState = {
  jumlah: 0,
  barang: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "tambah":
      return { ...state, jumlah: state.jumlah + action.value };
    case "reset":
      return initialState;
    case "cetak":
      return {
        ...state,
        barang: state.barang
          .filter((obj) => obj.title != action.cetakObj.nama)
          .concat(action.cetakObj),
      };
    default:
      return state;
  }
};

function MediaCard() {
  const classes = useStyles();
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/items", fetcher);
  const [card, dispatch] = React.useReducer(reducer, initialState);

  const [resetJumlah, setResetJumlah] = React.useState(false);
  function resetAllJumlah() {
    setResetJumlah(!resetJumlah);
  }

  const [cetak, setCetak] = React.useState(false);
  function cetakAll() {
    setCetak(!cetak);
  }

  const [jumlahDua, setJumlahDua] = React.useState(0);
  const reset = () => {
    setJumlahDua(0);
  };
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <Sidebar />
      <Grid container justify="flex-end">
        <Notif
          hitung={jumlahDua}
          cetakAll={cetakAll}
          cards={card}
          reset={dispatch}
          resetJumlahDua={reset}
        />
      </Grid>
      <Grid container spacing={2} className={classes.container}>
        {data.map((e, index) => (
          <>
            <Grid item xs={6} key={index}>
              <Item
                data={e}
                bayarDispatch={dispatch}
                harga={e.harga}
                nama={e.title}
                resetJumlah={resetJumlah}
                cetak={cetak}
                setJumlahDua={setJumlahDua}
                total={card.jumlah}
                jumlahDua={jumlahDua}
              />
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
}
export default MediaCard;
