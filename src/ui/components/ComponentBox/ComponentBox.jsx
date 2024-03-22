
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';


const ComponentBox = ({ number, numberColor, circleColor }) => {
    const circleStyle = {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      backgroundColor: '#F6BA27',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: numberColor,
      fontSize: '30px',
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 'auto',
    };
  
    return (
      <div style={circleStyle}>
        {number}
      </div>
    );
  };
  

ComponentBox.propTypes = {
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  numberColor: PropTypes.string.isRequired,
  circleColor: PropTypes.string.isRequired,
};

export default ComponentBox;

