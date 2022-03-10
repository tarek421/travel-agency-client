import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const Ratings = ({rating}) => {
    const [value, setValue] = useState(`${rating}`);
    return (
        <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Rating
          name="simple-controlled"
          value={value}
          readOnly
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    );
};

export default Ratings;