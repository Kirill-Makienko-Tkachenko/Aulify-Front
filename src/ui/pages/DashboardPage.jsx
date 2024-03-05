

// eslint-disable-next-line no-unused-vars
import React from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Header from "../components/Header";
import GraphComponent from "../components/GraphComponent";

function Dashboard() {
  return (
    <>
      <Box component="section" width={"100vw"} height={"100vh"} bgcolor={"#0053B1"}>
        <Header height={"150px"} />

        <Box margin={"50px"}>
          <Grid container spacing={2}>
            {/* Top row of graphs */}
            <Grid item xs={4}>
              <GraphComponent>
                <h1>Graph 1</h1>
              </GraphComponent>
            </Grid>
            <Grid item xs={4}>
              <GraphComponent>
                <h1>Graph 2</h1>
              </GraphComponent>
            </Grid>
            <Grid item xs={4}>
              <GraphComponent>
                <h1>Graph 3</h1>
              </GraphComponent>
            </Grid>

            {/* Bottom row of graphs */}
            <Grid item xs={4}>
              <GraphComponent>
                <h1>Graph 4</h1>
              </GraphComponent>
            </Grid>
            <Grid item xs={4}>
              <GraphComponent>
                <h1>Graph 5</h1>
              </GraphComponent>
            </Grid>
            <Grid item xs={4}>
              <GraphComponent>
                <h1>Graph 6</h1>
              </GraphComponent>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
