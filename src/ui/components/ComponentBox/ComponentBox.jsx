
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './ComponentBox.css'; 

const ComponentBox = ({ number, innerText, outerText, innerTextColor, outerTextColor, numberColor, circleColor }) => {
  return (
    <Box className="component-box">
      <Box className="circle" style={{ backgroundColor: circleColor }}>
        <Typography className="number" style={{ color: numberColor }}>{number}</Typography>
        <Typography className="inner-text" style={{ color: innerTextColor }}>{innerText}</Typography>
      </Box>
      <Typography className="outer-text" style={{ color: outerTextColor }}>{outerText}</Typography>
    </Box>
  );
};

ComponentBox.propTypes = {
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  innerText: PropTypes.string.isRequired,
  outerText: PropTypes.string.isRequired,
  innerTextColor: PropTypes.string.isRequired,
  outerTextColor: PropTypes.string.isRequired,
  numberColor: PropTypes.string.isRequired,
  circleColor: PropTypes.string.isRequired,
};

export default ComponentBox;
