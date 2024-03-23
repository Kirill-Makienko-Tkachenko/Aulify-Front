// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import pfp from "../../assets/Default_pfp.jpg";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const styles = {
  green: { color: "green" },
  red: { color: "red" },
};

// eslint-disable-next-line no-unused-vars
const SearchComponent = ({ children }) => {
  const nombreTemp = "Nombre"; //Nombre temporal, va a ser reemplazado por una query a la base de datos
  const idTemp = "XXXXXXXXXXXXX"; //ID temporal, va a ser reemplazado por una query a la base de datos
  const alumnoAulif = "Si";
  const Curso = "Curso 1";

  const alumnoStyle = alumnoAulif === "Si" ? styles.green : styles.red;
  const cursoStyle = Curso === "N/A" ? styles.red : styles.green;


  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = () => {
    //Lo vamos a reemplazar por una query a la bd
    console.log(`Searching for: ${searchTerm}`);
  };




  return (
    <Stack direction="row" useFlexGap flexWrap="wrap">
      <Box
        marginLeft={"20px"}
        marginTop={"5px"}
        paddingBottom={"0px"}
        line-height={"0px"}
      >
        <img src={pfp} alt="Profile Picture" width={175} height={175} />
        <p style={{ fontSize: "15px", lineHeight: ".5" }}>
          Nombre: {nombreTemp}
        </p>
        <p>ID: {idTemp}</p>
      </Box>
      <Box
        marginLeft={"20px"}
        textAlign={"center"}
        marginBottom={"0px"}
        paddingBottom={"0px"}
        line-height={"0px"}
      >
        <h2 style={{ fontSize: "25px", lineHeight: ".5" }}>
          Tiempo Jugado Promedio
        </h2>
        <p>00:00:00</p>
        <h2 style={{ fontSize: "25px", lineHeight: ".5" }}>
          ¿Alumno de Aulif?
        </h2>
        <h3 style={alumnoStyle}>{alumnoAulif}</h3>
        <h2 style={{ fontSize: "25px", lineHeight: ".5" }}>
          Curso más avanzado
        </h2>
        <h3 style={cursoStyle}>{Curso}</h3>
      </Box>

      <TextField
      InputProps={{
        disableUnderline: true, // Use this to disable the underline if needed
        style: {
          backgroundColor: 'white', // This sets the background color of the input field
        },
      }}
      // If you want to change the background color of the field including the label for filled variant
      sx={{
        '& .MuiFilledInput-root': {
          backgroundColor: 'white',
        }
      }}
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
        fullWidth 
      />
      
    </Stack>
  );
};

SearchComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchComponent;
