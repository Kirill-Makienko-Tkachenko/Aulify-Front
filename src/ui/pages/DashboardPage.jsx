
// eslint-disable-next-line no-unused-vars


import React from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Header from "../components/Header";
import GraphComponent from "../components/GraphComponent";
import ComponentBox from "../components/ComponentBox/ComponentBox";
import GraphLine from "../components/ComponentBox/GraphLine";
import Text from '@mui/material/Typography';

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
      <Box component="section" width={"100vw"} height={"100vh"} bgcolor={"#0053B1"}>
        <Header height={"150px"} />
        <Box margin={"50px"}>
          <Grid container spacing={2}>
            {/* Primer cuadro */}
            <Grid item xs={4}>
              <GraphComponent>
                <Box margin={"50px"} position="relative">
                  <ComponentBox
                    number={90} 
                    numberColor="#1D1934" 
                  />
                  <div style={{ position: 'absolute', top: -50, left: -50, color: '#FFFFFF' }}>Top Left Text</div>
                  <div style={{ position: 'absolute', top: -50, right: -50, color: '#FFFFFF' }}>Top Right Text</div>
                  <div style={{ position: 'absolute', bottom: -90, left: -50, color: '#FFFFFF' }}>Bottom Left Text</div>
                  <div style={{ position: 'absolute', bottom: -90, right: -50, color: '#FFFFFF' }}>Bottom Right Text</div>
                </Box>
              </GraphComponent>
            </Grid>

          
            <Grid item xs={4}>
              <GraphComponent>
                <Box margin={"50px"} position="relative">
                  <ComponentBox
                    number={90} 
                    numberColor="#1D1934" 
                  />
                  <div style={{ position: 'absolute', top: -50, left: -50, color: '#FFFFFF' }}>Top Left Text</div>
                  <div style={{ position: 'absolute', top: -50, right: -50, color: '#FFFFFF' }}>Top Right Text</div>
                  <div style={{ position: 'absolute', bottom: -90, left: -50, color: '#FFFFFF' }}>Bottom Left Text</div>
                  <div style={{ position: 'absolute', bottom: -90, right: -50, color: '#FFFFFF' }}>Bottom Right Text</div>
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
                
              </GraphComponent>
            </Grid>

            
            <Grid item xs={4}>
              <GraphComponent>
                
              </GraphComponent>
            </Grid>

            <Grid item xs={4}>
              <GraphComponent>
                
              </GraphComponent>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;



















