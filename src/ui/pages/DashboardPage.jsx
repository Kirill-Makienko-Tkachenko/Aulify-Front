// eslint-disable-next-line no-unused-vars
import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Header from "../components/Header";
import GraphComponent from "../components/GraphComponent";
import ComponentBox from "../components/ComponentBox/ComponentBox";
import GraphLine from "../components/ComponentBox/GraphLine";
import Text from "@mui/material/Typography";
import FilterComponent from "../components/FilterComponent";
import SearchhComponent from "../components/searchComponent";
import LeaderboardComponent from "../components/LeaderboardComponent";

function Dashboard() {
  const data = [
    { x: 1, y: 23, z: 122 },
    { x: 2, y: 3, z: 73 },
    { x: 3, y: 15, z: 32 },
    { x: 4, y: 35, z: 23 },
    { x: 5, y: 45, z: 20 },
    { x: 6, y: 25, z: 29 },
    { x: 7, y: 17, z: 61 },
    { x: 8, y: 32, z: 45 },
    { x: 9, y: 43, z: 93 },
  ];
  return (
    <>
      <Box
        component="section"
        sx={{
          width: "100%",
          height: "100vh",
          bgcolor: "#0053B1",
        }}
      >
        <Header height={"150px"} />
        <Box>
          <Grid container spacing={2} marginLeft={2}>
            {/* Primer cuadro */}
            <Grid item xs={4}>
              <GraphComponent>
                <Box position="relative">
                  <ComponentBox
                    TopLeftURL="Top Left Text"
                    TopRightURL="Top Right Text"
                    BottomLeftURL="Bottom Left Text"
                    BottomRightURL="Bottom Right Text"
                  />
                </Box>
              </GraphComponent>
            </Grid>

            <Grid item xs={4}>
              <GraphComponent>
                <Box position="relative">
                <ComponentBox
                    TopLeftURL="Top Left Text 2"
                    TopRightURL="Top Right Text 2"
                    BottomLeftURL="Bottom Left Text 2"
                    BottomRightURL="Bottom Right Text 2"
                  />
                </Box>
              </GraphComponent>
            </Grid>

            <Grid item xs={4}>
              <GraphComponent>
                <GraphLine data={data} />
              </GraphComponent>
            </Grid>

            <Grid item xs={4}>
              <GraphComponent>
                <FilterComponent />
              </GraphComponent>
            </Grid>

            <Grid item xs={4}>
              <GraphComponent>
                <SearchhComponent />
              </GraphComponent>
            </Grid>

            <Grid item xs={4}>
              <GraphComponent>
                <LeaderboardComponent />
              </GraphComponent>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;

//
