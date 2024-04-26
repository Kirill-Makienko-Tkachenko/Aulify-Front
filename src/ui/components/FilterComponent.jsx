// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import Text from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
// eslint-disable-next-line no-unused-vars
const FilterComponent = ({ children }) => {
  return (
    <div>
      <Text align="center" variant="h5" fontSize={60}>
        Filtrar por:
      </Text>
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
          >
            Alumnos de Aulify
          </Button> {/*Button component from MUI*/}
        </Box>
        <Box marginLeft={5}>
          <Button
            variant="contained"
            color="rojo"
            size="large"
            sx={{ height: "70px" }}
          >
            Todos los jugadores
          </Button>{" "}
          {/*Button component from MUI*/}
        </Box>
      </Box>
      <Box
        sx={{ display: "flex" }}
        marginBlockStart={3}
        justifyContent={"center"}
        alignItems={"center"}
      >

    


      </Box>
    </div>
  );
};

FilterComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FilterComponent;
