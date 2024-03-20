
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ComponentBox = ({ number, innerText, outerText, innerTextColor, outerTextColor, numberColor, circleColor }) => {
  const circleStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    backgroundColor: circleColor,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: numberColor,
    fontSize: '16px',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const numberStyle = {
    color: numberColor,
    fontSize: '30px',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const innerTextStyle = {
    color: innerTextColor,
    fontSize: '16px',
  };

  const outerTextStyle = {
    color: outerTextColor,
    fontSize: '16px',
    position: 'absolute',
    top: '5px',
    left: '5px',
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      <Box sx={circleStyle}>
        <Typography sx={numberStyle} variant="h3">{number}</Typography>
        <Typography sx={innerTextStyle} variant="body1">{innerText}</Typography>
      </Box>
      <Typography sx={outerTextStyle} variant="body1">{outerText}</Typography>
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



















