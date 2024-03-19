// eslint-disable-next-line no-unused-vars

// ComponentBox.jsx

import React from 'react';
import PropTypes from 'prop-types';

const ComponentBox = ({ number, innerText, outerText, innerTextColor, outerTextColor, numberColor, circleColor, circlePosition, innerTextPosition, outerTextPosition }) => {
  const circleStyle = {
    width: '100px',
    height: '100px',
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
    top: circlePosition.y,
    left: circlePosition.x,
    transform: 'translate(-50%, -50%)',
  };

  const numberStyle = {
    color: numberColor,
    fontSize: '30px',
    fontWeight: 'bold',
  };

  const innerTextStyle = {
    color: innerTextColor,
    fontSize: '16px',
    textAlign: 'left',
    position: 'absolute',
    top: innerTextPosition.y,
    left: innerTextPosition.x,
  };

  const outerTextStyle = {
    color: outerTextColor,
    fontSize: '16px',
    textAlign: 'center',
    position: 'absolute',
    top: outerTextPosition.y,
    left: outerTextPosition.x,
  };

  return (
    <div>
      <div style={circleStyle}>
        <div style={numberStyle}>{number}</div>
        <div style={innerTextStyle}>{innerText}</div>
      </div>
      <div style={outerTextStyle}>{outerText}</div>
    </div>
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
  circlePosition: PropTypes.shape({
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
  }).isRequired,
  innerTextPosition: PropTypes.shape({
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
  }).isRequired,
  outerTextPosition: PropTypes.shape({
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
  }).isRequired,
};

export default ComponentBox;
