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

export default function MediaCard() {
  const initialState = {
    hargaAwal: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "tambah":
        return { hargaAwal: state.hargaAwal + 1 };

      default:
        return state;
    }
  };

  const classes = useStyles();
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/items", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  // use Reducer

  return (
    <>
      <Sidebar />
      <Grid container justify="space-between">
        <Grid item={10}>jumlah : </Grid>
        <Notif />
      </Grid>
      <Grid container spacing={2} className={classes.container}>
        {data.map((e, index) => (
          <>
            <Grid item xs={6} key={index}>
              <Item data={e} />
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
}
