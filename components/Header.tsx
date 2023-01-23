import React from 'react';
import Image from 'next/image';
import Dropdown from './Dropdown';
import Avatar from './Avatar';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import BrandLogo from 'Icons/yertap.svg';
import LangIcon from 'Icons/lang.svg';
import BellIcon from 'Icons/bell.svg';
import Ellipse from 'Icons/ellipse.svg';

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
];

export const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-light1 py-5 px-[120px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <BrandLogo alt="Yertap" className="mr-10" />
          <Dropdown title="Categories" className="mr-1" />
          <Dropdown title="City" className="mr-1" />
          <Dropdown title="District" className="mr-1" />
          <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              size="small"
              options={top100Films.map((option) => option.title)}
              renderInput={(params) => <TextField {...params} label="Search" />}
            />
          </Stack>
        </div>
        <div className="flex">
          <button className="flex flex-row items-center">
            <LangIcon alt="lang" className="mr-2.5" /> Az
          </button>
          <span className="relative ml-8 flex  items-center">
            <BellIcon alt="bell" />
            <Ellipse alt="ellipse" className="absolute top-0.5 left-2.5" />
          </span>
          <span className="ml-11">
            <Avatar />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
