
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Grid, Typography } from '@mui/material'; // Importa Typography
import Header from "../components/Header";
import GraphComponent from "../components/GraphComponent";
import ComponentBox from "../components/ComponentBox";

function DashboardPage() {
  return (
    <Box component="section" width={"100vw"} height={"100vh"} bgcolor={"#0053B1"}>
      <Header height={"150px"} />

      <Box margin={"50px"} width={590} height={340} border="2px solid red" >
        <Grid container spacing={2} height="100%">
          <Grid item xs={4}>
            <GraphComponent>
              <ComponentBox
                number={90}
                innerText="Texto dentro del círculo"
                outerText="Texto fuera del círculo"
                innerTextColor="#FFFFFF"
                outerTextColor="#FFFFFF"
                numberColor="#FFFF00"
                circleColor="#3C1053"
              />
            </GraphComponent>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default DashboardPage;

















