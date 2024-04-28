import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useNavigate, useLocation } from 'react-router-dom';

const FilterComponent = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Función para manejar la navegación basada en el nivel de Python y si es para alumnos o no alumnos
  const handleNavigate = (level) => {
    const baseRoute = location.pathname.includes('Alumnos') ? 'dashboardAlumnosPython' : 'dashboardNoAlumnosPython';
    navigate(`/${baseRoute}${level}`);
  };

  return (
    <div>
      <Typography align="center" variant="h5" fontSize={60}>
        Filtrar por:
      </Typography>
      <Box
        sx={{ display: "flex" }}
        marginBlockStart={3}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box marginRight={5}>
          <Button
            variant="contained"
            color="verde"
            size="large"
            sx={{ height: "70px" }}
            onClick={() => navigate('/dashboardAlumnosPythonI')}
          >
            Alumnos de Aulify
          </Button>
        </Box>
        <Box marginLeft={5}>
          <Button
            variant="contained"
            color="rojo"
            size="large"
            sx={{ height: "70px" }}
            onClick={() => navigate('/dashboardNoAlumnosPythonI')}
          >
            Todos los jugadores
          </Button>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex" }}
        marginBlockStart={3}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box>
          <Button
            variant="contained"
            color="amarillo"
            size="large"
            sx={{ height: "70px" }}
            onClick={() => handleNavigate('I')}
          >
            Python 1
          </Button>
        </Box>
        <Box marginLeft={5} marginRight={5}>
          <Button
            variant="contained"
            color="amarillo"
            size="large"
            sx={{ height: "70px" }}
            onClick={() => handleNavigate('II')}
          >
            Python 2
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="amarillo"
            size="large"
            sx={{ height: "70px" }}
            onClick={() => handleNavigate('III')}
          >
            Python 3
          </Button>
        </Box>
      </Box>
    </div>
  );
};

FilterComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FilterComponent;
