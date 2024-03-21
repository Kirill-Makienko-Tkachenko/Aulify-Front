
// eslint-disable-next-line no-unused-vars

import React from "react";
import Box from '@mui/material/Box';
import GraphComponent from "../components/GraphComponent";
import Header from "../components/Header";
import ComponentBox from "../components/ComponentBox/ComponentBox"; 

function NuevoDashboardPage() {
  return (
    <>
      <Box component="section" width={"100vw"} height={"100vh"} bgcolor={"#0053B1"}>
        <Header height={"150px"} />

        {/* Bloque con color proporcionado por GraphComponent */}
        <GraphComponent>
          <Box margin={"50px"} position="relative">
            {/* ComponentBox con las nuevas especificaciones */}
            <ComponentBox
              number={90} 
              numberColor="#1D1934" 
            />
            {/* Textos en cada esquina */}
            <div style={{ position: 'absolute', top: -50, left: -50, color: '#FFFFFF' }}>Top Left Text</div>
            <div style={{ position: 'absolute', top: -50, right: -50, color: '#FFFFFF' }}>Top Right Text</div>
            <div style={{ position: 'absolute', bottom: -90, left: -50, color: '#FFFFFF' }}>Bottom Left Text</div>
            <div style={{ position: 'absolute', bottom: -90, right: -50, color: '#FFFFFF' }}>Bottom Right Text</div>
          </Box>
        </GraphComponent>
      </Box>
    </>
  );
}

export default NuevoDashboardPage;



















