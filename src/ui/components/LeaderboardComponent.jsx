import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const LeaderboardComponent = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await fetch('http://api-aulify-env.eba-2c64ija4.us-east-1.elasticbeanstalk.com/highscore/highscores/top10');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setLeaderboardData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchLeaderboardData();
  }, []); // Empty dependency array means this effect will only run once after the initial render

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Box sx={{ p: 2, borderRadius: 2 }}>
        <TableContainer
          component={Paper}
          sx={{ maxHeight: 280, overflow: "auto", borderRadius: 2, bgcolor: "transparent" }}
        >
          <Table aria-label="leaderboard table" bgcolor="#1e81b0">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>#</TableCell>
                <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
                <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>ID</TableCell>
                <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaderboardData.map((row, index) => (
                <TableRow
                  key={row.HighscoreId}
                  sx={{
                    bgcolor: index % 2 ? "#005b96" : "#29a1f0",
                    color: index === 0 ? "yellow" : "white",
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell align="center" sx={{ fontWeight: "bold", color: "white" }}>
                    {index + 1}  {/* Local counter */}
                  </TableCell>
                  <TableCell align="center" sx={{ color: "white"}}>{row.PlayerName}</TableCell>
                  <TableCell align="center"sx={{ color: "white"}}>{row.Jugador_idJugador}</TableCell>
                  <TableCell align="center"sx={{ color: "white"}}>{row.Highscore}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      </>
  );
};

export default LeaderboardComponent;
