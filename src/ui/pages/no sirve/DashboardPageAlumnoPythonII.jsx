// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Header from "../../components/Header";
import GraphComponent from "../../components/GraphComponent";
import ComponentBox from "../../components/ComponentBox/ComponentBox";
import GraphLine from "../../components/ComponentBox/GraphLine";
import Text from "@mui/material/Typography";
import FilterComponent from "../../components/FilterComponent";
import SearchhComponent from "../../components/searchComponent";
import LeaderboardComponent from "../../components/LeaderboardComponent";

function DashboardAlumnoPythonII() {

  //const ENDPOINTURL = "http://api-aulify-env.eba-2c64ija4.us-east-1.elasticbeanstalk.com"
  const ENDPOINTURL = "http://localhost:3000"

  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ENDPOINTURL + "/jugadores/jugadores/playersForGraph2");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setGraphData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  
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
                  {/*<ComponentBox
                    TopLeftURL= {ENDPOINTURL + "/jugador/jugadores/onlineAulify"}
                    TopRightURL={ENDPOINTURL + "/levels/2/aulify-game-completion"}
                    BottomLeftURL={ENDPOINTURL + "/levels/2/aulify-game-retention"}
                    BottomRightURL={ENDPOINTURL + "/quejas/badQuejas"}
      />*/}
                   {/*  [x,x] Jugadores en linea - alumno y todos los jugadores
                        [x,x] Retencion en juegos - alumnos y todos los jugadores
                        [x] Promedio niveles completados - alumnos y todos los jugadores
                        [x] Quejas recibidas
                        */}
                </Box>
              </GraphComponent>
            </Grid>

            <Grid item xs={4}>
              <GraphComponent>
                <Box position="relative">
                {/*<ComponentBox
                    TopLeftURL= {ENDPOINTURL + "/jugador/jugadores"}
                    TopRightURL={ENDPOINTURL + "/jugador/jugadores/averageAge"}
                    BottomLeftURL={ENDPOINTURL + "/quejas/quejas"}
                    BottomRightURL={ENDPOINTURL + "/quejas/quejas/badQuejas"}
                      />*/}
                  {/*   [x] Alumnos registrados
                        [x] Edad promedio
                        [x] Calificacion buena 4 o mas
                        [x] Calificacion mala 3 o menos
                        [x] Puntaje del medio */}
                </Box>
              </GraphComponent>
            </Grid>

            <Grid item xs={4}>
              <GraphComponent>
                <GraphLine data={graphData} />
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

export default DashboardAlumnoPythonII;

//
