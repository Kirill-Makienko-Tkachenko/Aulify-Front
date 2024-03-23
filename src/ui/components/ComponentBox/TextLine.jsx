
// eslint-disable-next-line no-unused-vars

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TextLine = ({ text, position }) => {
  return (
    <Box sx={{ position: 'absolute', ...position }}>
      <Typography>{text}</Typography>
    </Box>
  );
};

export default TextLine;

