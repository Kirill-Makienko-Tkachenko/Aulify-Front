
// eslint-disable-next-line no-unused-vars


import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Header from "../components/Header";
import GraphComponent from "../components/GraphComponent";
import ComponentBox from "../components/ComponentBox"; // Importa el componente ComponentBox
import Typography from '@mui/material/Typography';

function DashboardPage() {
  return (
    <>
      <Box component="section" width={"100vw"} height={"100vh"} bgcolor={"#0053B1"}>
        <Header height={"150px"} />

        <Box margin={"50px"}>
          <Grid container spacing={2}>
            {/* Top row of graphs */}
            <Grid item xs={4}>
              <GraphComponent>
                  <ComponentBox
                    number={90} // Número para el centro del círculo
                    innerText="Texto dentro del círculo" // Texto dentro del círculo
                    outerText="Texto fuera del círculo" // Texto fuera del círculo
                    innerTextColor="#FFFFFF" // Color del texto dentro del círculo
                    outerTextColor="#FFFFFF" // Color del texto fuera del círculo
                    numberColor="#FFFF00" // Color del número
                    circleColor="#3C1053" // Color del círculo
                    circlePosition={{ x: '50%', y: '50%' }} // Coordenadas del círculo dentro del box
                    innerTextPosition={{ x: '5px', y: '5px' }} // Coordenadas del texto dentro del círculo
                    outerTextPosition={{ x: '10%', y: '15%' }} // Coordenadas del texto fuera del círculo
                  />
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

export default DashboardPage;










