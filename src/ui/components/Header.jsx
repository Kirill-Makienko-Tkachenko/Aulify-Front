/* eslint-disable no-unused-vars */

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import PropTypes from "prop-types";

import logo_blanco from "../../assets/logo_aulify_blanco.png";

const Header = ({ height }) => {
return (
    <AppBar
        position="static"
        color="transparent"
        sx={{
            height: height || "auto",
            boxShadow: 2,
            filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25))",
        }}
    >
        <Toolbar sx={{ justifyContent: "center" }}>
            <img src={logo_blanco} width={"15%"} height={"auto"}/> 
        </Toolbar>
    </AppBar>
);
};

Header.propTypes = {
  height: PropTypes.string.isRequired,
};

export default Header;
