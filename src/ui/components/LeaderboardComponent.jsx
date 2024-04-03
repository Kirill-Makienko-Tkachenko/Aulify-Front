// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";

const LeaderboardComponent = () => {
  const leaderboardData = [
    { position: 1, name: "Nombre Apellido", id: "XXXXXXXX", score: 999 },
    { position: 2, name: "Nombre Apellido", id: "XXXXXXXX", score: 987 },
    { position: 3, name: "Nombre Apellido", id: "XXXXXXXX", score: 950 },
    { position: 4, name: "Nombre Apellido", id: "XXXXXXXX", score: 925 },
    { position: 5, name: "Nombre Apellido", id: "XXXXXXXX", score: 920 },
  ];

  return (
    <>
    <Box sx={{ p: 2, borderRadius: 2 }}>
      <TableContainer
        component={Paper}
        sx={{ maxHeight: 200, overflow: "auto", borderRadius: 2, bgcolor: "transparent" }}

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
                key={row.id}
                sx={{
                  bgcolor: index % 2 ? "#005b96" : "#29a1f0",
                  color: index === 0 ? "yellow" : "white",
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  {row.position}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </Box>
    <Box
      sx={{ display: "flex" }}
      marginBlockStart={3}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Button
          
          variant="contained"
          color="amarillo"
          size="large"
          sx={{ height: "50px", mx: 10  }}
        >
          Global
        </Button>

        <Button
          
          variant="contained"
          color="amarillo"
          size="large"
          sx={{ height: "50px", mx: 10 }}
        >
          Semanal
        </Button>
      </Box>
      </>
  );
};

export default LeaderboardComponent;
