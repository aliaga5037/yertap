import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

const HoverRating = ({ initialRating = 2 }: { initialRating?: number }) => {
  const [value, setValue] = React.useState<number | null>(initialRating);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        emptyIcon={<i className="icon icon-star text-xl text-inherit mr-1" />}
        icon={<i className="icon icon-star text-xl text-purple-base mr-1" />}
      />
    </Box>
  );
};

export default HoverRating;
