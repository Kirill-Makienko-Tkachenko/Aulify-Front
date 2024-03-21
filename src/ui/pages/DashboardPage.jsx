
// eslint-disable-next-line no-unused-vars
import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Header from "../components/Header";
import GraphComponent from "../components/GraphComponent";
import ComponentBox from "../components/ComponentBox/ComponentBox"; // Importa el componente ComponentBox

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
                  />
              </GraphComponent>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default DashboardPage;


















