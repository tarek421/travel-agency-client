import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const Ratings = ({ rating }) => {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={parseInt(rating)}
        readOnly
      />
    </Box>
  );
};

export default Ratings;