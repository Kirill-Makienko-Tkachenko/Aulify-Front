// eslint-disable-next-line no-unused-vars
import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Header from "../components/Header";
import GraphComponent from "../components/GraphComponent";
import Text from '@mui/material/Typography';
import PieChartComponent from "../components/PieChartComponent";


function Dashboard() {
  // Datos para la prueba del gráfico de pasteles
  const pieChartData = [
    { name: 'Grupo A', value: 10 },
    { name: 'Grupo B', value: 40 },
    { name: 'Grupo C', value: 30 },
    { name: 'Grupo D', value: 20 },
  ];

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
                <PieChartComponent data={pieChartData} width={250} height={250} />
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
