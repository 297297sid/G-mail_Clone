import React from "react";
import Navbar from "./Navbar";
import Leftpanel from "./Leftpanel";
import { Grid } from "@mui/material";
import Middle from "./Middle";
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
        <Grid item xs={1}>
          <Middle />
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
