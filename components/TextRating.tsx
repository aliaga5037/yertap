import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

const TextRating = ({ rating }: { rating: number }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={rating}
        readOnly
        precision={0.5}
        emptyIcon={<i className="icon icon-star mr-1 text-xl text-inherit" />}
        icon={<i className="icon icon-star mr-1 text-xl text-purple-base" />}
      />
    </Box>
  );
};

export default TextRating;
