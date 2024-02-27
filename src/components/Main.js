import React from "react";
import Navbar from "./Navbar";
import Leftpanel from "./Leftpanel";
import { Grid } from "@mui/material";
import Middle from "./Middle";
import Rightpanel from "./Rightpanel";
function Main() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={2}>
          <Leftpanel />
        </Grid>
        <Grid item xs={9}>
          <Middle />
        </Grid>
        <Grid item xs={1}>
          <Rightpanel/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
