// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const ComponentBox = ({
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
        console.log("Data 0", data[0], TopLeftURL);
        setTopRightData(data[1]);
        console.log("Data 1", data[1], TopRightURL);
        setBottomLeftData(data[2], BottomLeftURL);
        console.log("Data 2", data[2]);
        setBottomRightData(data[3], BottomRightURL);
        console.log("Data 3", data[3]);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [TopLeftURL, TopRightURL, BottomLeftURL, BottomRightURL]);
  console.log(TopLeftURL, TopRightURL, BottomLeftURL, BottomRightURL);

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

  const number = 90;

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
                <h1>Jugadores en linea</h1>
                <h1>{topLeftData.length}</h1>
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
            {topRightData &&
            topRightData.users &&
            topRightData.users.length > 0 ? (
              <div>
                <h3>Level: {topRightData.level}</h3>
                <ul>
                  {topRightData.users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                  ))}
                </ul>
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
                <h1 color="green">
                  {Math.round(bottomLeftData.average_time_seconds / 60)}
                </h1>
                <h1>
                Minutos
                </h1>
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
              justifyContent: "end",
            }}
          >
            {bottomRightData && bottomRightData.result}
          </Box>
          <Box sx={circleStyle}>{number}</Box>
        </Box>
      )}
    </>
  );
};

ComponentBox.propTypes = {
  TopLeftURL: PropTypes.string,
  TopRightURL: PropTypes.string,
  BottomLeftURL: PropTypes.string,
  BottomRightURL: PropTypes.string,
};

export default ComponentBox;
