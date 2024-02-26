import React from "react";
import Navbar from "./Navbar";
import Leftpanel from "./Leftpanel";
import { Grid } from "@mui/material";
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
      </Grid>
    </div>
  );
}

export default Main;
