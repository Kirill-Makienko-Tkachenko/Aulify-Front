// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Header from "../components/Header";
import GraphComponent from "../components/GraphComponent";

import GraphLine from "../components/ComponentBox/GraphLine";

import FilterComponent from "../components/FilterComponent";
import SearchhComponent from "../components/searchComponent";
import LeaderboardComponent from "../components/LeaderboardComponent";
import LoadingComponent1 from "../components/LoadingComponent/LoadingComponent1";
import LoadingComponent2 from "../components/LoadingComponent/LoadingComponent2";

function DashboardNoAlumnoPythonI() {

  const ENDPOINTURL = "https://dsno4juwaj.execute-api.us-east-1.amazonaws.com"
  //const ENDPOINTURL = "http://localhost:3000"

  const [graphData, setGraphData] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const headers = {
          authorization: `Bearer ${token}`,
        };
        const response = await fetch(ENDPOINTURL + "/jugador/jugadores/playersForGraph", {headers});
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
  console.log(graphData);
  
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
                  <LoadingComponent1  
                  TopLeftURL= {ENDPOINTURL + "/jugador/jugadores/online"}
                  TopRightURL={ENDPOINTURL + "/level/levels/1/game-completion"}
                  BottomLeftURL={ENDPOINTURL + "/level/levels/1/game-retention"}
                  BottomRightURL={ENDPOINTURL + "/quejas/quejas"}/>
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
                        <LoadingComponent2 
                        TopLeftURL= {ENDPOINTURL + "/jugador/jugadores"}
                        TopRightURL={ENDPOINTURL + "/jugador/jugadores/averageAge"}
                        BottomLeftURL={ENDPOINTURL + "/quejas/quejas"}
                        BottomRightURL={ENDPOINTURL + "/quejas/quejas/badQuejas"}
                      />
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

export default DashboardNoAlumnoPythonI;

//
