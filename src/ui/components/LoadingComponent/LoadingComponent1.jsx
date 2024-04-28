// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const LoadingComponent1 = ({
  TopLeftURL,
  TopRightURL,
  BottomLeftURL,
  BottomRightURL,
}) => {
  const [topLeftData, setTopLeftData] = useState(null);
  const [topRightData, setTopRightData] = useState(null);
  const [bottomLeftData, setBottomLeftData] = useState(null);
  const [bottomRightData, setBottomRightData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          authorization: `Bearer ${token}`,
        };

        const responses = await Promise.all([
          fetch(TopLeftURL, { headers }),
          fetch(TopRightURL, { headers }),
          fetch(BottomLeftURL, { headers }),
          fetch(BottomRightURL, { headers }),
        ]);
        
      

        const data = await Promise.all(
          responses.map((response) => response.json())
        );

        

        setTopLeftData(data[0]);
       
        setTopRightData(data[1]);
        
        setBottomLeftData(data[2]);
        
        
        setBottomRightData(data[3]);
        
        console.log(bottomRightData)
        
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [TopLeftURL, TopRightURL, BottomLeftURL, BottomRightURL]);


  const circleStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    backgroundColor: "#F6BA27",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#1D1934",
    fontSize: "30px",
    fontWeight: "bold",
    textAlign: "center",
    margin: "auto",
    boxShadow: 3,
  };

  const h3Style = {
    color: 'White', // Este es el color de texto para los h3
    fontSize: '1.3rem', // Este es el tamaño de la fuente para los h3
    fontWeight: 'bold', // Aquí se define el grosor de la fuente
    margin: '5px 0', // Margen arriba y abajo para separar de otros elementos
  };

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {!isLoading && !error && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            height: "300px",
            position: "relative",
          }}
        >
          <Box sx={{ width: "50%", height: "50%", display: "flex" }}>
            <div>
              <h3 style={{...h3Style, marginTop: 10}}>Jugadores en linea</h3 >
              <h1 style={{fontSize: "40px", textAlign: "right", color: "#04B100", marginRight: 94, marginTop: 60}}>{topLeftData.length}</h1>
            </div>
          </Box>
          <Box
            sx={{
              width: "50%",
              height: "50%",
              display: "flex",
              justifyContent: "end",
            }}
          >
            {topRightData ? (
              <div>
                <h3 style={{ ...h3Style, textAlign: "center", marginLeft: 20 }}>Niveles promedio completados {topRightData[0].name}</h3>
                
                <h1 style={{fontSize: "40px", textAlign: "right", color: "#04B100", marginRight: 94}}>{parseInt(topRightData[0].average_levels_completed)}</h1>
              </div>
            ) : (
              <div>No data available</div>
            )}
          </Box>

          <Box
            sx={{
              width: "50%",
              height: "50%",
              display: "flex",
              alignItems: "end",
            }}
          >
            {bottomLeftData && bottomLeftData.average_time_seconds ? (
              <div>
                <h1 style={{fontSize: "35px", textAlign: "left", color: "#04B100", marginRight: 50}}>
                  {Math.round(bottomLeftData.average_time_seconds / 60)} Minutos
                </h1>
                <h3 style={h3Style}>Retención en juegos</h3>
              </div>
            ) : (
              <div>No data available</div>
            )}
          </Box>

          <Box
            sx={{
              width: "50%",
              height: "50%",
              display: "flex",
              alignItems: "end",
              justifyContent: "center",
            }}
          >

            {bottomRightData && bottomRightData.length > 0 ? (
              <div>
                <h1 style={{fontSize: "40px", textAlign: "center", color: "#04B100", marginLeft: 50}}>
                {bottomRightData.filter(item => item.Calificacion > 3).length}
                </h1>
                <h3 style={{ ...h3Style, textAlign: "right", marginLeft: 50}}>Quejas recibidas</h3>
              </div>
            ) : (
              <div>No data available</div>
            )}
          </Box>
          <Box sx={circleStyle}>
          <p style={{ fontSize: "20px" }}>Puntaje actual: </p>
            {topLeftData.length + parseInt(topRightData[0].average_levels_completed) + bottomRightData.filter(item => item.Calificacion > 3).length + Math.round(bottomLeftData.average_time_seconds / 60)}
            </Box>
        </Box>
      )}
    </>
  );
};

LoadingComponent1.propTypes = {
  TopLeftURL: PropTypes.string,
  TopRightURL: PropTypes.string,
  BottomLeftURL: PropTypes.string,
  BottomRightURL: PropTypes.string,
};

export default LoadingComponent1;
