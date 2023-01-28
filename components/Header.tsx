import React from 'react';
import Dropdown from './Dropdown';
import Avatar from './Avatar';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import BrandLogo from 'Icons/yertap.svg';
import LangIcon from 'Icons/lang.svg';
import BellIcon from 'Icons/bell.svg';
import Ellipse from 'Icons/ellipse.svg';
import Link from 'next/link';
import NotificationsPopup from './NotificationsPopup';

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
];

const items = [
  {
    id: 1,
    type: 'review',
    user: {
      id: 1,
      name: 'John Doe',
      image: '/images/user.jpg',
    },
    title: 'John clapped your Review!',
    text: `Looking for low prices? We've got an entire page dedicated to finding you fantastic deals in your favorite places.`,
    viewed: false,
    date: '9 m',
  },
  {
    id: 2,
    type: 'review',
    user: {
      id: 1,
      name: 'John Doe',
      image: '/images/user.jpg',
    },
    title: 'John clapped your Review!',
    text: `Looking for low prices? We've got an entire page dedicated to finding you fantastic deals in your favorite places.`,
    viewed: true,
    date: '32 m',
  },
];

export const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-light1 py-5 px-[120px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <BrandLogo alt="Yertap" className="mr-10" />
          </Link>
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
          <span className="group relative ml-8 flex items-center">
            <BellIcon alt="bell" className="cursor-pointer" />
            <Ellipse
              alt="ellipse"
              className="absolute top-0.5 left-2.5 cursor-pointer"
            />

            <div className="absolute -right-20 top-11 z-10 scale-0 transition-all delay-300 ease-in-out group-hover:scale-100">
              <NotificationsPopup items={items} />
            </div>
          </span>
          <span className="ml-11">
            <Avatar user={{ id: 1, name: 'John Doe', image: '' }} />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
