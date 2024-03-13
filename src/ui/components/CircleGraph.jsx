
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const CircleGraph = ({ number, text }) => {
  const circleStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    backgroundColor: '#F6BA27', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '75px', // Tamaño del número
    textAlign: 'center',
  };

  const textStyle = {
    fontSize: '18px', // Tamaño del texto
  };

  return (
    <div style={circleStyle}>
      <div>{number}</div>
      <div style={textStyle}>{text}</div>
    </div>
  );
};

CircleGraph.propTypes = {
  number: PropTypes.number.isRequired, // Número en el centro del círculo
  text: PropTypes.string.isRequired, // Texto debajo del número
};

export default CircleGraph;



