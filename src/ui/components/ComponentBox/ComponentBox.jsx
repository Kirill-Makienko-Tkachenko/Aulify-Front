
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';


const ComponentBox = ({ TopLeftURL, TopRightURL, BottomLeftURL, BottomRightURL }) => {
    const circleStyle = {
      position: 'absolute', 
    top: '50%',          
    left: '50%',         
    transform: 'translate(-50%, -50%)', 
    width: '150px',      
    height: '150px',     
    borderRadius: '50%',
    backgroundColor: '#F6BA27',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: "#1D1934",
    fontSize: '30px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 'auto',      
    boxShadow: 3,        
    };
  
    const number = 90;

    return (
      <>

      
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          height: '300px',
          position: 'relative'
        }}
      >
        <Box sx={{ width: '50%', height: '50%', display: 'flex'}}>
          
          {TopLeftURL}
        </Box>
        <Box sx={{ width: '50%', height: '50%', display: 'flex', justifyContent: 'end' }}>
          
          {TopRightURL}
        </Box>
        <Box sx={{ width: '50%', height: '50%', display: 'flex', alignItems: 'end' }}>
        
          {BottomLeftURL}
        </Box>
        <Box sx={{ width: '50%', height: '50%', display: 'flex', alignItems: 'end', justifyContent: 'end' }}>
          
          {BottomRightURL}
        </Box>
        <Box sx={circleStyle}>
          {number}
        </Box>
      </Box>
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

/**/